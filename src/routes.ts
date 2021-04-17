import { Response, Router, Request } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  return res.status(201).json({"aqui":"teste"}).send();
});

router.post("/users", (req: Request, res: Response) => {
  return createUserController.handler(req, res);
});

export { router };
