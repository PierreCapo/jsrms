import { TERRAINS, CLIFF } from './some';
import { NumberRepresentable, Representable, StringRepresentable } from './common';
import * as ts from 'typescript';
import * as fs from 'fs';

let cmd = ts.parseCommandLine([]);
let program = ts.createProgram(['map.ts', 'some.ts', 'common.ts'], cmd.options);

// For whatever reason not calling this line makes the AST parsing crash with multiple files
let typechecker = program.getTypeChecker();

let sourceFile = program.getSourceFile('map.ts');

let empty = () => {};
// Dummy transformation context
let context: ts.TransformationContext = {
    startLexicalEnvironment: empty,
    suspendLexicalEnvironment: empty,
    resumeLexicalEnvironment: empty,
    endLexicalEnvironment: () => [],
    getCompilerOptions: () => program.getCompilerOptions(),
    hoistFunctionDeclaration: empty,
    hoistVariableDeclaration: empty,
    readEmitHelpers: () => undefined,
    requestEmitHelper: empty,
    enableEmitNotification: empty,
    enableSubstitution: empty,
    isEmitNotificationEnabled: () => false,
    isSubstitutionEnabled: () => false,
    onEmitNode: empty,
    onSubstituteNode: (hint, node) => node,
    factory: ts.factory,
};

interface Imports {
    title: string;
    content: { string: Representable };
}

// TODO: get rid of this hardcoded imports, most likely something like that already exist on Typescript
let availableImports: { [key: string]: Representable } = { ...TERRAINS, ...CLIFF };

const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
    return (sourceFile) => {
        const visitor = (node: ts.Node): ts.Node => {
            if (ts.isPropertyAccessExpression(node)) {
                let expression = node.name;
                if (ts.isIdentifier(expression)) {
                    let result = availableImports[expression.getFullText()];
                    return result.generateNode();
                }
            }
            return ts.visitEachChild(node, visitor, context);
        };

        return ts.visitNode(sourceFile, visitor);
    };
};

function visitAndTranspileToRMS(node: ts.Node): string {
    switch (node.kind) {
        case ts.SyntaxKind.SourceFile:
            let nodeSourceFile = node as ts.SourceFile;
            return nodeSourceFile.statements.map((child) => visitAndTranspileToRMS(child)).join('\n');

        case ts.SyntaxKind.ExpressionStatement:
            let nodeExpressionStatement = node as ts.ExpressionStatement;
            return visitAndTranspileToRMS(nodeExpressionStatement.expression) + ';';

        case ts.SyntaxKind.CallExpression:
            let nodeCallExpression = node as ts.CallExpression;
            return visitAndTranspileToRMS(nodeCallExpression.expression) + '(' + nodeCallExpression.arguments.map((child) => visitAndTranspileToRMS(child)).join(', ') + ')';

        case ts.SyntaxKind.Identifier:
            let castedIdentifierNode = node as ts.Identifier;
            return castedIdentifierNode.text;

        case ts.SyntaxKind.StringLiteral:
            let nodeStringLiteral = node as ts.StringLiteral;
            let stringRepresentable = new StringRepresentable(nodeStringLiteral.text);
            return stringRepresentable.generateStringFromNode();

        case ts.SyntaxKind.NumericLiteral:
            let nodeNumericLiteral = node as ts.NumericLiteral;
            let numericRepresentable = new NumberRepresentable(nodeNumericLiteral.text);
            return numericRepresentable.generateStringFromNode();

        case ts.SyntaxKind.FirstStatement:
            let nodeFirstStatement = node as ts.VariableStatement;
            return visitAndTranspileToRMS(nodeFirstStatement.declarationList);

        case ts.SyntaxKind.VariableDeclarationList:
            let nodeVariableDeclarationList = node as ts.VariableDeclarationList;
            return nodeVariableDeclarationList.declarations.map((child) => visitAndTranspileToRMS(child)).join(',') + ';';

        case ts.SyntaxKind.TrueKeyword:
            return 'true';

        case ts.SyntaxKind.FalseKeyword:
            return 'false';

        case ts.SyntaxKind.BinaryExpression:
            let nodeBinaryExpression = node as ts.BinaryExpression;
            return visitAndTranspileToRMS(nodeBinaryExpression.left) + ' ' + getOperatorParser(nodeBinaryExpression.operatorToken.kind) + ' ' + visitAndTranspileToRMS(nodeBinaryExpression.right);

        case ts.SyntaxKind.PostfixUnaryExpression:
            let nodePostfixUnaryExpression = node as ts.PostfixUnaryExpression;
            return visitAndTranspileToRMS(nodePostfixUnaryExpression.operand) + getOperatorParser(nodePostfixUnaryExpression.operator);

        case ts.SyntaxKind.ForStatement:
            let nodeForStatement = node as ts.ForStatement;
            return `for (${visitAndTranspileToRMS(nodeForStatement.initializer)}; ${visitAndTranspileToRMS(nodeForStatement.condition)};  ${visitAndTranspileToRMS(nodeForStatement.incrementor)}) {
                ${visitAndTranspileToRMS(nodeForStatement.statement)}
            }`;

        case ts.SyntaxKind.Block:
            let nodeBlock = node as ts.Block;
            return nodeBlock.statements.map((child) => visitAndTranspileToRMS(child)).join(';\n');

        case ts.SyntaxKind.IfStatement:
            let nodeIfStatement = node as ts.IfStatement;
            return (
                `if (${visitAndTranspileToRMS(nodeIfStatement.expression)}) {
                    ${visitAndTranspileToRMS(nodeIfStatement.thenStatement)}
                } ` +
                (nodeIfStatement.elseStatement !== undefined
                    ? `else {
                    ${visitAndTranspileToRMS(nodeIfStatement.elseStatement)}
                }`
                    : '')
            );

        case ts.SyntaxKind.WhileStatement:
            let nodeWhileStatement = node as ts.WhileStatement;
            return `while (${visitAndTranspileToRMS(nodeWhileStatement.expression)}) {
                        ${visitAndTranspileToRMS(nodeWhileStatement.statement)}
                    } `;

        case ts.SyntaxKind.ParenthesizedExpression:
            let nodeParenthesizedExpression = node as ts.ParenthesizedExpression;
            return visitAndTranspileToRMS(nodeParenthesizedExpression.expression);

        case ts.SyntaxKind.BreakStatement:
            return 'break';

        case ts.SyntaxKind.VariableDeclaration:
            let nodeVariableDeclaration = node as ts.VariableDeclaration;
            console.log(nodeVariableDeclaration.initializer);
            let initializer = nodeVariableDeclaration.initializer;
            if (ts.isObjectLiteralExpression(nodeVariableDeclaration.initializer)) {
            }
            return visitAndTranspileToRMS(nodeVariableDeclaration.name) + '=' + visitAndTranspileToRMS(nodeVariableDeclaration.initializer);

        default:
            console.log(ts.SyntaxKind[node.kind]);
            return 'errorCannotParseNode';
    }
}

let getOperatorParser = (operator: number) => {
    switch (operator) {
        case ts.SyntaxKind.EqualsEqualsEqualsToken:
            return ts.SyntaxKind.EqualsEqualsToken;
        case ts.SyntaxKind.ExclamationEqualsEqualsToken:
            return ts.SyntaxKind.ExclamationEqualsToken;
        default:
            return ts.tokenToString(operator);
    }
};

export const generateMapInRMS = (): string => {
    let modifiedAST = transformer(context)(sourceFile);
    return visitAndTranspileToRMS(modifiedAST);
};

let result = generateMapInRMS();

fs.writeFileSync('./toto.json', JSON.stringify(result, null, '\t'));
fs.writeFileSync('./toto.txt', generateMapInRMS());
