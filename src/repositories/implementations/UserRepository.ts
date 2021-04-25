import { singleton } from "tsyringe";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

@singleton()
export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const userByEmail = this.users.find((user) => user.email === email);
    return userByEmail;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
