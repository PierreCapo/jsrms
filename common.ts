import * as ts from 'typescript';

const { factory } = ts;

let identifierKey = 'IDENTIFIER';
let valueKey = 'VALUE';

export interface Representable {
    identifier: string;
    value: any;
    generateNode: () => ts.Node;
    generateStringFromNode: () => string;
    generateTypeFromNode: () => string;
}

export class VectorRepresentable implements Representable {
    identifier: 'VECTOR';
    value: number[];
    constructor(xPos: number, yPos: number, zPos: number) {
        this.value = [xPos, yPos, zPos];
    }
    generateNode = (): ts.Node => {
        return ts.factory.createStringLiteral('hello world');
    };

    generateStringFromNode = (): string => {
        return `"${this.value}"`;
    };

    generateTypeFromNode = (): string => {
        return 'vector';
    };
}

export class StringRepresentable implements Representable {
    identifier: 'STRING';
    value: string;
    constructor(value: string) {
        this.value = value;
    }
    generateNode = (): ts.Node => {
        return factory.createObjectLiteralExpression([factory.createPropertyAssignment(factory.createIdentifier(identifierKey), factory.createStringLiteral(this.identifier)), factory.createPropertyAssignment(factory.createIdentifier(valueKey), factory.createStringLiteral(this.value))], false);
    };

    generateStringFromNode = (): string => {
        return `"${this.value}"`;
    };

    generateTypeFromNode = (): string => {
        return 'string';
    };
}
export class NumberRepresentable implements Representable {
    identifier: 'NUMBER';
    value: number;
    constructor(value: string | number) {
        this.value = Number(value);
    }
    generateNode = (): ts.Node => {
        return ts.factory.createNumericLiteral(this.value);
    };

    generateStringFromNode = (): string => {
        return `${this.value}`;
    };
    generateTypeFromNode = (): string => {
        if (Number.isInteger(this.value)) {
            return 'int';
        } else {
            return 'float';
        }
    };
}

export class BoolRepresentable implements Representable {
    identifier: 'BOOL';
    value: boolean;
    constructor(value: boolean) {
        this.value = value;
    }
    generateNode = (): ts.Node => {
        return ts.factory.createStringLiteral('hello world');
    };

    generateStringFromNode = (): string => {
        return `${this.value}`;
    };

    generateTypeFromNode = (): string => {
        return 'bool';
    };
}
