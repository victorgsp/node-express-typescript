import { UserRepository } from './repositories/implementations/UserRepository';
import { container } from "tsyringe";


container.register("UserRepository", {
    useClass: UserRepository
});
