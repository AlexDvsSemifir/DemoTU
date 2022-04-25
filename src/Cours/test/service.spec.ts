// On oubli pas les imports sinon ça marche pas ! <3
import Service from '../main/mok/service';
import Repository from '../main/mok/repository';
import { mockGetData, mokAddData } from '../test/mok/repoMock';

// Définition des variables
let repo: Repository;
let service: Service;

beforeEach(() => {
  // Import du repo et du service
  repo = new Repository();
  // On passe le répo en tant que paramètre du constructeur du service
  service = new Service(repo);
  // Permet de remplacer les méthodes du service par celles de notre mock
  const getData = mockGetData;
  const addData = mokAddData;
});

describe('Test du service via des mocks', () => {
  // Un describe qui va regrouper tous les tests qui concernent getData :
  describe('getData', () => {
    it('Doit retourner la valeur par défaut du tableau ["aa", "bb, "cc"]', () => {
      // test 'classique' de getData, dans lequel la requête interceptée et remplacée par celle du mock
      expect(service.getData()).toEqual(['aa', 'bb', 'cc']);
    });
  });

  // describe qui regroupe tous les tests qui concernent addData :
  describe('addData', () => {
    it("Ajout d'une data au tableau. Doit retourner le tableau complet + 'dd' ", () => {
      expect(service.getData()).toEqual(['aa', 'bb', 'cc']);
      // La même avec addData
      service.addData('dd');
      expect(service.getData()).toEqual(['aa', 'bb', 'cc', 'dd']);
    });
  });
});
