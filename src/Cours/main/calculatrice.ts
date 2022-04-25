export default class Calculatrice {
  public add(a: number, b: number): number {
    return a + b;
  }
  public sub(a: number, b: number): number {
    return a - b;
  }
  public mul(a: number, b: number): number {
    return a * b;
  }
  public div(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division par 0');
    }
    return a / b;
  }
}
