import { mockDarts } from './mock-data';
import { dartBoardTemplate } from './templates/dart-board';

export interface DartCalculation {
  y: number | null;
  x: number | null;
}

export type SetOfDarts = DartCalculation[];

export class DartCalculator {
  private darts: SetOfDarts[] = []

  public addDarts(darts: SetOfDarts) {
    return this.darts.unshift(darts);
  }

  private renderDarts(darts: SetOfDarts): string {
    return dartBoardTemplate(darts);
  }

  public render(darts?: SetOfDarts[]) {
    return `
      ${(darts || this.darts)
        .map((darts) => `<span>${this.renderDarts(darts)}</span><br><br>`)
        .join("")}
      <br>
      <br>
      `;
  }
}
