"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DartCalculator = void 0;
const dart_board_1 = require("./templates/dart-board");
class DartCalculator {
    constructor() {
        this.darts = [];
    }
    addDarts(darts) {
        return this.darts.unshift(darts);
    }
    renderDarts(darts) {
        return (0, dart_board_1.dartBoardTemplate)(darts);
    }
    render() {
        return `
      ${this.darts
            .map((darts) => `<span>${this.renderDarts(darts)}</span><br><br>`)
            .join("")}
      <br>
      <br>
      `;
    }
}
exports.DartCalculator = DartCalculator;
