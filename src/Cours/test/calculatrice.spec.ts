import Calculatrice from '../main/calculatrice'; // import the class

// Méthode qui sera lancée avant chaque test unitaire.
// beforeEach

// Se lance une fois avant chaque test unitaire
// beforeAll

let calculatrice: Calculatrice;

beforeAll(() => {
  // L'initialisation de la classe
  // Etant faite dans une fonction, on doit la déclarer avant.
  // Vu qu'elle doit pouvoir changer, on let au lieu de const.
  calculatrice = new Calculatrice();
});

// Test de toutes les méthodes de notre objet :
describe('Test des méthodes de la calculatrice', () => {
  // Tests de la méthode add
  describe('Additions', () => {
    it("L'addition de a et b doit renvoyer a + b", () => {
      expect(calculatrice.add(2, 4)).toEqual(6);
    });
    // On fait en général un second test pour être sur.
    it("L'adddition de a et b doit renvoyer a + b", () => {
      expect(calculatrice.add(5, 5)).toEqual(10);
    });
  });
  describe('Divisions', () => {
    // Test de la méthode div
    it('div', () => {
      expect(calculatrice.div(2, 4)).toEqual(0.5);
    });
    // Test d'une division par 0
    it('div par 0, qui doit renvoyer une erreur', () => {
      // Avec toThrow, on vérifie que la méthode renvoie une erreur.
      // Ici, ce sera forcément le cas, car on divise par 0.
      // On doit passer par une lambda, car on ne peut pas utiliser la méthode expect.
      // En effet, le throw est levé dans le expect et non dans le test.
      // Elle nous permet de récupérer le retour et de vérifier ce dernier.
      expect(() => calculatrice.div(2, 0)).toThrow(Error);
      // On peut lui préciser le type de throw en paramètre.
    });
  });
  describe('Soustraction', () => {
    // Test de la méthode sub
    it('sub', () => {
      expect(calculatrice.sub(2, 4)).toEqual(-2);
    });
  });
  // Test de la méthode mul
  describe('Multiplications', () => {
    it('mul', () => {
      expect(calculatrice.mul(2, 4)).toEqual(8);
    });
  });
});
