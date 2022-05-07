"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dart_calculator_1 = require("./dart-calculator");
const app = (0, express_1.default)();
const port = 3000;
const dartCalculator = new dart_calculator_1.DartCalculator();
app.get("/", (req, res) => {
    const html = dartCalculator.render();
    res.send(html);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
