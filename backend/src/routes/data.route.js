import { Router } from "express";

const dataRoute = Router();

dataRoute.route("/article").get((req, res) => {
  res.send("Hello, world!");
});

export default dataRoute;
