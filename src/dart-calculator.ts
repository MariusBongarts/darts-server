import { dartBoardTemplate } from './templates/dart-board';

export interface DartCalculation {
  x: number;
  y: number;
}

export type SetOfDarts = DartCalculation[];

export class DartCalculator {
  private darts: SetOfDarts[] = [];

  public addDarts(darts: SetOfDarts) {
    return this.darts.unshift(darts);
  }

  private renderDarts(darts: SetOfDarts): string {
    return dartBoardTemplate(darts);
  }

  public render() {
    return `
      ${this.darts
        .map((darts) => `<span>${this.renderDarts(darts)}</span><br><br>`)
        .join("")}
      <br>
      <br>
      `;
  }
}
