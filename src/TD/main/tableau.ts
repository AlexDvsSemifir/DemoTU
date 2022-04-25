export default class Tableau {
  public tableau: string[] = ['a', 'b', 'c'];

  /**
   * Affiche les data par défaut du tableau
   * @returns {string[]}
   */
  public getData(): string[] {
    return this.tableau;
  }

  /**
   * Remplit le tableau avec un élément ou plus
   * @param data
   */
  public addDatas(...data: string[]): void {
    data.forEach(data => {
      this.tableau.push(data);
    });
  }

  /**
   * Permet d'ajouter un unique élément
   * @param data
   */
  public addData(data: string): void {
    if (data.length > 2) {
      throw new RangeError('Le nom ne doit pas dépasser 2 caractères');
    }
    this.tableau.push(data);
  }

  /**
   * Retire un élément spécifique du tableau
   * @param data
   */
  public subData(data: string): void {
    this.tableau.splice(this.tableau.indexOf(data), 1);
  }
}
