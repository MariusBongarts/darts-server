import express from "express";
import { DartCalculator, SetOfDarts } from "./dart-calculator";

const app = express();

const port = 3000;

const dartCalculator = new DartCalculator();

app.use(express.json())

app.get("/", (req, res) => {
  const html = dartCalculator.render();
  res.send(html);
});

app.post("/", (req, res) => {
  const darts = req.body as unknown as SetOfDarts;
  console.log(darts);
  dartCalculator.addDarts(darts);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
