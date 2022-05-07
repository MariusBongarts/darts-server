import express from "express";
import { DartCalculator } from "./dart-calculator";

const app = express();

const port = 3000;

const dartCalculator = new DartCalculator();

app.get("/", (req, res) => {
  const html = dartCalculator.render();
  res.send(html);
});

app.post("/", (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);
  if (x == NaN || y == NaN) {
    res.send("X, and Y values must be numbers");
    return;
  }
  dartCalculator.addCalculation({ x, y });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
