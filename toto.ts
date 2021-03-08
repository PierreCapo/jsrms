import * as ts from 'typescript';
import * as fs from 'fs';

let cmd = ts.parseCommandLine([]);
let program = ts.createProgram(['map.ts', 'some.ts'], cmd.options);
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

const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
    return (sourceFile) => {
        const visitor = (node: ts.Node): ts.Node => {
            /*    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
                const typeChecker = program.getTypeChecker();
                const importSymbol = typeChecker.getSymbolAtLocation(node.moduleSpecifier);
                let baba = typeChecker.getTypeAtLocation;
                console.log(baba);
                return node;
            }*/
            if (ts.isPropertyAccessExpression(node)) {
                const typeChecker = program.getTypeChecker();
                // console.log(node);
                const personType = typeChecker.getTypeAtLocation(node.expression);
                console.log(typeChecker.typeToString(personType));
                for (const property of personType.getProperties()) {
                    console.log(property);
                }
                if (node.name.escapedText === 'CALIFORNIA_GROUND6_CAL') {
                    return ts.factory.createStringLiteral('hello world');
                }
                // @ts-ignore
                /*       switch (node.escapedText) {
                    case 'CLIFF':
                        console.log('wololo');
                        return ts.factory.createIdentifier('typescript');

                    case 'CALIFORNIA':
                        console.log('walala');

                        return ts.factory.createIdentifier('transformers');
                }*/
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
            return '"' + nodeStringLiteral.text + '"';

        case ts.SyntaxKind.NumericLiteral:
            let nodeNumericLiteral = node as ts.NumericLiteral;
            return nodeNumericLiteral.text;

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
            // console.log(nodeVariableDeclaration);
            return visitAndTranspileToRMS(nodeVariableDeclaration.name) + '=' + visitAndTranspileToRMS(nodeVariableDeclaration.initializer);

        default:
            console.log(ts.SyntaxKind[node.kind]);
            return 'yolo';
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
