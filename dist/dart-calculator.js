"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DartCalculator = void 0;
class DartCalculator {
    constructor() {
        this.calculations = [{ x: 1, y: 2 }];
    }
    addCalculation(calc) {
        return this.calculations.unshift(calc);
    }
    renderCalculation({ x, y }) {
        return `x: <b>${x}</b>, y: <b>${y}</b>`;
    }
    render() {
        return `
      <h1>Darts Calculatory</h1>

      <h3>Letzte Würfe:</h3>
      <br>
      ${this.calculations
            .map((calc) => `<span>${this.renderCalculation(calc)}</span><br>`)
            .join("")}
      <br>
      <br>
      `;
    }
}
exports.DartCalculator = DartCalculator;
