import { HttpException } from "../../../../errors/HttpException";
import { User } from "../../entities/User"
import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest {
  userId: string;
}

interface IResponse {
  user: Omit<User, 'password'>;
}

export class GetUserProfileUseCase {
  constructor(private readonly usersRepository: UsersRepository) { }

  async execute({ userId }: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findById(userId);

    if (!userExists) {
      throw new HttpException({
        code: 404,
        message: 'user not found',
      });
    }

    const { password, ...userWithoutPassword } = userExists;

    return { user: userWithoutPassword };
  }
}

