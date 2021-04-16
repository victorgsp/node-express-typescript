import { response, Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  return res.status(201).send();
});

router.post("/users", (req, res) => {
  return res.status(201).send();
});

export { router };
