// Repository à la con qui ne fonctionne pas !

// Rappels :
// Le repository est une classe qui réalise les appels à la BDD
// Le service va appeler le repository pour récupérer les données et les manipuler

// Ici, on imagine qu'on a un un service qui va réaliser nos requêtes API.
// L'idée sera de mettre en place un mock, et de demander à jest de rediriger les requêtes vers notre mock au lieu du service.
// Comme ça on aura pas besoin de gérer la vraie base de données : on pourra utiliser celle du mock en lieu et place
export default class Repository {
  // Méthode getData qui devrait réaliser un fectch.
  getData(): string[] {
    //@ts-ignore
    return fetch('https://google.com');
  }

  addData(data: string) {
    //@ts-ignore
    fetch('https://google.com', data);
  }

  removeData(id: number) {
    //@ts-ignore
    fetch('https://google.com/' + id);
  }
}
