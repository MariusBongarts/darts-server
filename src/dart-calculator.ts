interface DartCalculation {
  x: number;
  y: number;
}
export class DartCalculator {
  private calculations: DartCalculation[] = [];

  public addCalculation(calc: DartCalculation) {
    return this.calculations.unshift(calc);
  }

  private renderCalculation({ x, y }: DartCalculation) {
    return `x: <b>${x}</b>, y: <b>${y}</b>`;
  }

  public render() {
    return `
      <h1>Darts Calculatory</h1>

      <h3>Letzte Würfe:</h3>
      ${this.calculations
        .map((calc) => `<span>${this.renderCalculation(calc)}</span><br>`)
        .join("")}
      <br>
      <br>
      `;
  }
}
