import Repository from './repository';
// Notre service va appeler notre répository qui contient les données.
// On déclare ici les méthodes du service qui seront utilisées par nos tests
export default class Service {
  repo: Repository;

  public constructor(repo: Repository) {
    this.repo = repo;
  }

  public getData(): string[] {
    return this.repo.getData();
  }

  public addData(data: string): void {
    this.repo.addData(data);
  }

  public removeData(id: number): void {
    this.repo.removeData(id);
  }
}
