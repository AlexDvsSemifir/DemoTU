"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau = /** @class */ (function () {
    function Tableau() {
        this.tableau = ['a', 'b', 'c'];
    }
    Tableau.prototype.getData = function () {
        return this.tableau;
    };
    Tableau.prototype.addData = function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        data.forEach(function (data) {
            _this.tableau.push(data);
        });
    };
    Tableau.prototype.subData = function (data) {
        this.tableau.splice(this.tableau.indexOf(data), 1);
    };
    return Tableau;
}());
exports.default = Tableau;
