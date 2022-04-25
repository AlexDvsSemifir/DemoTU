import Repository from '../../main/mok/repository';

// Définition d'un échantillon de données qui sera substitué à notre vraie BDD
const data: string[] = ['aa', 'bb', 'cc'];

// Va 'espionner' la méthode getData de Repository pour simuler son fonctionnement
// Utilise une méthode propre à jest
export const mockGetData = jest
  .spyOn(Repository.prototype, 'getData')
  // Lorsque JEST va interroger le répository, il surbstituera le retour de getData pour retourner ses données à lui.
  .mockImplementation(() => data);

// On fait la même pour addData
export const mokAddData = jest
  .spyOn(Repository.prototype, 'addData')
  .mockImplementation((param: string) => {
    // Définit l'action à réaliser
    data.push(param);
  });
