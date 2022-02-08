import { Repository } from "../../../@types/database";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { User } from "../entities/User";

export class UsersRepository {
  constructor(private readonly repository: Repository) {}

  async create({ name, email, password }: ICreateUserDto): Promise<User> {
    const user = await this.repository.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    return this.repository.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, data: User): Promise<void> {
    await this.repository.user.update({
      where: { id },
      data,
    });
  }
}
