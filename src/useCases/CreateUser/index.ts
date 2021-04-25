import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const userCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(userCase);

export { createUserController, userCase };
