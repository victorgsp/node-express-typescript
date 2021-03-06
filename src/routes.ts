import { Response, Router, Request } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
// import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.get("/users", (req: Request, res: Response) =>
  res
    .status(201)
    .json({ users: ["user1", "user2"] })
    .send()
);

router.post("/users", (req: Request, res: Response) => {
  const controller = container.resolve(CreateUserController);
  return controller.handler(req, res);
});

export { router };
