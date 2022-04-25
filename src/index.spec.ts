// Permet de regrouper tous les tests à l'intérieur
// Param 1 : : paramètre obligatoire qui accueille le nom de la méthode à tester en string.
describe('test', () => {
  // Callback : On peut l'appeler test ou it.
  // Prend deux params : 1 : à quoi il sert (quelle partie de la méthode)
  test('add', async () => {
    // Expect : On précise la méthode à tester
    // .toEqual : résultat attendu.
    expect(1 + 1).toEqual(2);
  });
});

// On pourra ensuite le lancer avec npm x (x étant le nom du package jest, à vérifier dans le package.json, dans la section scripts)
