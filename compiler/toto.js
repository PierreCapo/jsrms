"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMapInRMS = void 0;
var some_1 = require("./some");
var common_1 = require("./common");
var ts = __importStar(require("typescript"));
var fs = __importStar(require("fs"));
var cmd = ts.parseCommandLine([]);
var program = ts.createProgram(['map.ts', 'some.ts', 'common.ts'], cmd.options);
// For whatever reason not calling this line makes the AST parsing crash with multiple files
var typechecker = program.getTypeChecker();
var sourceFile = program.getSourceFile('map.ts');
var empty = function () { };
// Dummy transformation context
var context = {
    startLexicalEnvironment: empty,
    suspendLexicalEnvironment: empty,
    resumeLexicalEnvironment: empty,
    endLexicalEnvironment: function () { return []; },
    getCompilerOptions: function () { return program.getCompilerOptions(); },
    hoistFunctionDeclaration: empty,
    hoistVariableDeclaration: empty,
    readEmitHelpers: function () { return undefined; },
    requestEmitHelper: empty,
    enableEmitNotification: empty,
    enableSubstitution: empty,
    isEmitNotificationEnabled: function () { return false; },
    isSubstitutionEnabled: function () { return false; },
    onEmitNode: empty,
    onSubstituteNode: function (hint, node) { return node; },
    factory: ts.factory,
};
// TODO: get rid of this hardcoded imports, most likely something like that already exist on Typescript
var availableImports = __assign(__assign({}, some_1.TERRAINS), some_1.CLIFF);
var transformer = function (context) {
    return function (sourceFile) {
        var visitor = function (node) {
            if (ts.isPropertyAccessExpression(node)) {
                var expression = node.name;
                if (ts.isIdentifier(expression)) {
                    var result_1 = availableImports[expression.getFullText()];
                    return result_1.generateNode();
                }
            }
            return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(sourceFile, visitor);
    };
};
function visitAndTranspileToRMS(node) {
    switch (node.kind) {
        case ts.SyntaxKind.SourceFile:
            var nodeSourceFile = node;
            return nodeSourceFile.statements.map(function (child) { return visitAndTranspileToRMS(child); }).join('\n');
        case ts.SyntaxKind.ExpressionStatement:
            var nodeExpressionStatement = node;
            return visitAndTranspileToRMS(nodeExpressionStatement.expression) + ';';
        case ts.SyntaxKind.CallExpression:
            var nodeCallExpression = node;
            return visitAndTranspileToRMS(nodeCallExpression.expression) + '(' + nodeCallExpression.arguments.map(function (child) { return visitAndTranspileToRMS(child); }).join(', ') + ')';
        case ts.SyntaxKind.Identifier:
            var castedIdentifierNode = node;
            return castedIdentifierNode.text;
        case ts.SyntaxKind.StringLiteral:
            var nodeStringLiteral = node;
            var stringRepresentable = new common_1.StringRepresentable(nodeStringLiteral.text);
            return stringRepresentable.generateStringFromNode();
        case ts.SyntaxKind.NumericLiteral:
            var nodeNumericLiteral = node;
            var numericRepresentable = new common_1.NumberRepresentable(nodeNumericLiteral.text);
            return numericRepresentable.generateStringFromNode();
        case ts.SyntaxKind.FirstStatement:
            var nodeFirstStatement = node;
            return visitAndTranspileToRMS(nodeFirstStatement.declarationList);
        case ts.SyntaxKind.VariableDeclarationList:
            var nodeVariableDeclarationList = node;
            return nodeVariableDeclarationList.declarations.map(function (child) { return visitAndTranspileToRMS(child); }).join(',') + ';';
        case ts.SyntaxKind.TrueKeyword:
            return 'true';
        case ts.SyntaxKind.FalseKeyword:
            return 'false';
        case ts.SyntaxKind.BinaryExpression:
            var nodeBinaryExpression = node;
            return visitAndTranspileToRMS(nodeBinaryExpression.left) + ' ' + getOperatorParser(nodeBinaryExpression.operatorToken.kind) + ' ' + visitAndTranspileToRMS(nodeBinaryExpression.right);
        case ts.SyntaxKind.PostfixUnaryExpression:
            var nodePostfixUnaryExpression = node;
            return visitAndTranspileToRMS(nodePostfixUnaryExpression.operand) + getOperatorParser(nodePostfixUnaryExpression.operator);
        case ts.SyntaxKind.ForStatement:
            var nodeForStatement = node;
            return "for (" + visitAndTranspileToRMS(nodeForStatement.initializer) + "; " + visitAndTranspileToRMS(nodeForStatement.condition) + ";  " + visitAndTranspileToRMS(nodeForStatement.incrementor) + ") {\n                " + visitAndTranspileToRMS(nodeForStatement.statement) + "\n            }";
        case ts.SyntaxKind.Block:
            var nodeBlock = node;
            return nodeBlock.statements.map(function (child) { return visitAndTranspileToRMS(child); }).join(';\n');
        case ts.SyntaxKind.IfStatement:
            var nodeIfStatement = node;
            return ("if (" + visitAndTranspileToRMS(nodeIfStatement.expression) + ") {\n                    " + visitAndTranspileToRMS(nodeIfStatement.thenStatement) + "\n                } " +
                (nodeIfStatement.elseStatement !== undefined
                    ? "else {\n                    " + visitAndTranspileToRMS(nodeIfStatement.elseStatement) + "\n                }"
                    : ''));
        case ts.SyntaxKind.WhileStatement:
            var nodeWhileStatement = node;
            return "while (" + visitAndTranspileToRMS(nodeWhileStatement.expression) + ") {\n                        " + visitAndTranspileToRMS(nodeWhileStatement.statement) + "\n                    } ";
        case ts.SyntaxKind.ParenthesizedExpression:
            var nodeParenthesizedExpression = node;
            return visitAndTranspileToRMS(nodeParenthesizedExpression.expression);
        case ts.SyntaxKind.BreakStatement:
            return 'break';
        case ts.SyntaxKind.VariableDeclaration:
            var nodeVariableDeclaration = node;
            console.log(nodeVariableDeclaration.initializer);
            return ' ' + visitAndTranspileToRMS(nodeVariableDeclaration.name) + '=' + visitAndTranspileToRMS(nodeVariableDeclaration.initializer);
        default:
            console.log(ts.SyntaxKind[node.kind]);
            return 'errorCannotParseNode';
    }
}
var getOperatorParser = function (operator) {
    switch (operator) {
        case ts.SyntaxKind.EqualsEqualsEqualsToken:
            return ts.SyntaxKind.EqualsEqualsToken;
        case ts.SyntaxKind.ExclamationEqualsEqualsToken:
            return ts.SyntaxKind.ExclamationEqualsToken;
        default:
            return ts.tokenToString(operator);
    }
};
var generateMapInRMS = function () {
    var modifiedAST = transformer(context)(sourceFile);
    return visitAndTranspileToRMS(modifiedAST);
};
exports.generateMapInRMS = generateMapInRMS;
var result = exports.generateMapInRMS();
fs.writeFileSync('./toto.json', JSON.stringify(result, null, '\t'));
fs.writeFileSync('./toto.txt', exports.generateMapInRMS());
