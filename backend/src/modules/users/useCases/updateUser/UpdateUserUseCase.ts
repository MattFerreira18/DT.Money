import { HttpException } from "src/errors/HttpException";
import { TokenProvider } from "src/providers/TokenProvider";
import { IUpdateUserDto } from "../../dtos/IUpdateUserDto";
import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest extends IUpdateUserDto { }

export class UpdateUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly tokenProvider: TokenProvider,
  ) { }

  async execute({ name, email, password }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw new HttpException({
        code: 404,
        message: 'user does not exists',
      });
    }

    let newPassword = userExists.password;

    if (password) {
      newPassword = this.tokenProvider.create(password);
    }

    Object.assign(userExists, {
      name,
      email,
      password: newPassword,
    });

    await this.usersRepository.update(userExists.id, userExists);
  }
}
