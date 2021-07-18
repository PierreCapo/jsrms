"use strict";
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
exports.BoolRepresentable = exports.NumberRepresentable = exports.StringRepresentable = exports.VectorRepresentable = void 0;
var ts = __importStar(require("typescript"));
var factory = ts.factory;
var identifierKey = 'IDENTIFIER';
var valueKey = 'VALUE';
var VectorRepresentable = /** @class */ (function () {
    function VectorRepresentable(xPos, yPos, zPos) {
        var _this = this;
        this.generateNode = function () {
            return ts.factory.createStringLiteral('hello world');
        };
        this.generateStringFromNode = function () {
            return "\"" + _this.value + "\"";
        };
        this.generateTypeFromNode = function () {
            return 'vector';
        };
        this.value = [xPos, yPos, zPos];
    }
    return VectorRepresentable;
}());
exports.VectorRepresentable = VectorRepresentable;
var StringRepresentable = /** @class */ (function () {
    function StringRepresentable(value) {
        var _this = this;
        this.generateNode = function () {
            return factory.createObjectLiteralExpression([factory.createPropertyAssignment(factory.createIdentifier(identifierKey), factory.createStringLiteral(_this.identifier)), factory.createPropertyAssignment(factory.createIdentifier(valueKey), factory.createStringLiteral(_this.value))], false);
        };
        this.generateStringFromNode = function () {
            return "\"" + _this.value + "\"";
        };
        this.generateTypeFromNode = function () {
            return 'string';
        };
        this.value = value;
    }
    return StringRepresentable;
}());
exports.StringRepresentable = StringRepresentable;
var NumberRepresentable = /** @class */ (function () {
    function NumberRepresentable(value) {
        var _this = this;
        this.generateNode = function () {
            return ts.factory.createNumericLiteral(_this.value);
        };
        this.generateStringFromNode = function () {
            return "" + _this.value;
        };
        this.generateTypeFromNode = function () {
            if (Number.isInteger(_this.value)) {
                return 'int';
            }
            else {
                return 'float';
            }
        };
        this.value = Number(value);
    }
    return NumberRepresentable;
}());
exports.NumberRepresentable = NumberRepresentable;
var BoolRepresentable = /** @class */ (function () {
    function BoolRepresentable(value) {
        var _this = this;
        this.generateNode = function () {
            return ts.factory.createStringLiteral('hello world');
        };
        this.generateStringFromNode = function () {
            return "" + _this.value;
        };
        this.generateTypeFromNode = function () {
            return 'bool';
        };
        this.value = value;
    }
    return BoolRepresentable;
}());
exports.BoolRepresentable = BoolRepresentable;
