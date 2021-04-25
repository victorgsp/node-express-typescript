import { inject, singleton } from "tsyringe";
import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserRequestDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@singleton()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private usersRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw Error("User alredy exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
