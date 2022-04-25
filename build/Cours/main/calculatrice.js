"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculatrice = /** @class */ (function () {
    function Calculatrice() {
    }
    Calculatrice.prototype.add = function (a, b) {
        return a + b;
    };
    Calculatrice.prototype.sub = function (a, b) {
        return a - b;
    };
    Calculatrice.prototype.mul = function (a, b) {
        return a * b;
    };
    Calculatrice.prototype.div = function (a, b) {
        if (b === 0) {
            throw new Error('Division par 0');
        }
        return a / b;
    };
    return Calculatrice;
}());
exports.default = Calculatrice;
