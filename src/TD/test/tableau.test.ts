import Tableau from '../main/tableau';

// Définition de la variable qui va contenir notre objet.
let tableau: Tableau;

beforeEach(() => {
  // On initialise notre objet avant chaque test.
  tableau = new Tableau();
});

// Test de toutes les méthodes de notre objet :
describe('Test de la classe Tableau', () => {
  // Tests de la méthode getData
  describe('getData', () => {
    it('Doit retourner a, b et c', () => {
      expect(tableau.getData()).toEqual(['a', 'b', 'c']);
    });
    it('Doit retourner une longueur égale à 3', () => {
      expect(tableau.getData().length).toEqual(3);
    });
    it('Doit retourner une longueur égale à 3', () => {
      expect(tableau.getData()).toHaveLength(3);
    });
  });
  describe('addData', () => {
    it('Doit ajouter "d" dans le tableau. "e" ne doit pas être présent', () => {
      tableau.addData('d');
      //   expect(tableau.getData()).toEqual(['a', 'b', 'c', 'd']);
      expect(tableau.tableau).toContain('d');
      // Avec 'not', pour vérifier que la valeur n'est pas dans le tableau.
      // Fonction avec tous les tests
      expect(tableau.tableau).not.toContain('e');
    });
    it("Levée d'exception quand le param est plus long que 2", () => {
      expect(() => tableau.addData('def')).toThrow(RangeError);
    });
  });
  // Test de la méthode subData
  describe('subData', () => {
    it('Doit supprimer "b" du tableau', () => {
      // On vérifie que la longueur initiale est bien 3.
      expect(tableau.tableau).toHaveLength(3);
      // Supprime 'b' du tableau
      tableau.subData('b');
      // On vérifie que le tableau a buen une longueur de 2
      expect(tableau.tableau).toHaveLength(2);
      // Vérifie que b n'est plsu dans le tableau
      expect(tableau.tableau).not.toContain('b');
    });
  });
});
