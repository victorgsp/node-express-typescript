import { container } from "tsyringe";
import { UserRepository } from "./repositories/implementations/UserRepository";

container.register("UserRepository", {
  useClass: UserRepository,
});
