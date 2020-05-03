const utils = require('./utils');
const uuid = require('uuid');

const codeGenerator = (node, options = {}) => {
    const { extendStringWithUUID, elseIfVariation, removeLeftExpression, withExtraEndComa } = options;
    switch (node.type) {
        case 'Program':
            return node.body.map(codeGenerator).join('\n');
        case 'BlockStatement':
            return node.body.map(codeGenerator).join('\n\t');

        case 'ExpressionStatement':
            return (
                codeGenerator(node.expression) + ';' // << (...because we like to code the *correct* way)
            );

        case 'CallExpression':
            return (
                codeGenerator(node.callee) +
                '(' +
                node.arguments
                    .map((arg) =>
                        codeGenerator(arg, {
                            extendStringWithUUID: utils.listOfFunctionWithUUID.includes(node.callee.name) ? true : false,
                        }),
                    )
                    .join(', ') +
                ')'
            );

        case 'Identifier':
            return utils.identifierMapper[node.name] || node.name;

        case 'Literal':
            if (utils.getTypeOf(node.value) === 'string') {
                const generatedUUID = extendStringWithUUID ? '_' + uuid.v4() : '';
                return '"' + node.value + generatedUUID + '"';
            }
            return node.value;

        case 'VariableDeclaration':
            return node.declarations.map(codeGenerator);

        case 'VariableDeclarator':
            return (
                (typeof node.init.value !== 'undefined'
                    ? utils.getTypeOf(node.init.value)
                    : node.init.callee
                    ? utils.getTypeOfReturnedValue(node.init.callee.name)
                    : node.init.type === 'MemberExpression'
                    ? 'string'
                    : 'float') +
                ' ' +
                codeGenerator(node.id) +
                ' = ' +
                codeGenerator(node.init) +
                ';'
            );

        case 'ForStatement':
            return (
                'for (' +
                codeGenerator(node.init, { withExtraEndComa: true }) +
                ' ' +
                codeGenerator(node.test, { removeLeftExpression: true }) +
                ') {\n\t' +
                codeGenerator(node.body) +
                '\n}'
            );

        case 'AssignmentExpression':
            return codeGenerator(node.left) + node.operator + codeGenerator(node.right) + (withExtraEndComa ? ';' : '');
        case 'BinaryExpression':
        case 'LogicalExpression':
            return (
                (removeLeftExpression ? '' : '(' + codeGenerator(node.left)) +
                ' ' +
                node.operator +
                ' ' +
                codeGenerator(node.right) +
                (removeLeftExpression ? '' : ')')
            );

        case 'UpdateExpression':
            return codeGenerator(node.argument) + node.operator;

        case 'IfStatement':
            const prefix = elseIfVariation ? 'else if' : 'if';
            const isFinalElseStatement = node.alternate && node.alternate.type === 'BlockStatement';
            const alternateText = node.alternate ? codeGenerator(node.alternate, { elseIfVariation: true }) : '';
            const endAlternateText = isFinalElseStatement ? `else {\n\t${alternateText} \n}\n` : alternateText;
            return prefix + ' (' + codeGenerator(node.test) + ') {\n\t' + codeGenerator(node.consequent) + '\n}\n' + endAlternateText;

        case 'WhileStatement':
            return 'while (' + codeGenerator(node.test) + ') {\n\t' + codeGenerator(node.body) + '\n}';

        case 'UnaryExpression':
            return node.operator + codeGenerator(node.argument);

        case 'BreakStatement':
            return 'break;';

        case 'MemberExpression':
            if (node.object.name === 'TERRAINS' || node.object.name === 'WATER' || node.object.name === 'CLIFF') {
                return '"' + codeGenerator(node.property) + '"';
            }
            return 'break;';

        default:
            console.log(node);
            throw new TypeError(node.type);
    }
};

module.exports = codeGenerator;
