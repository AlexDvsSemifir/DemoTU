"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
beforeEach(function () {
    var tableau;
});
describe("Test de la classe Tableau", function () {
    it("getData", function () {
        expect(tableau.getData()).toEqual(['a', 'b', 'c']);
    });
});
