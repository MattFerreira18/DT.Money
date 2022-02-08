import { HttpException } from "src/errors/HttpException";
import { EncryptProvider } from "src/providers/EncryptProvider";
import { TokenProvider } from "src/providers/TokenProvider";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export class AuthenticateUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptProvider: EncryptProvider,
    private readonly tokenProvider: TokenProvider,
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw new HttpException({
        code: 401,
        message: 'email or password incorrect',
      });
    }

    const isPasswordCorrect = await this.encryptProvider.compare(
      password,
      userExists.password
    );

    if (!isPasswordCorrect) {
      throw new HttpException({
        code: 401,
        message: 'email or password incorrect',
      });
    }

    const newPasswordHash = await this.encryptProvider.hash(password);

    Object.assign(userExists, { password: newPasswordHash });

    await this.usersRepository.update(userExists.id, userExists);

    const tokenSubject = {
      id: userExists.id,
      email: userExists.email,
    };

    const token = this.tokenProvider.create(tokenSubject);

    return {
      user: {
        name: userExists.name,
        email: userExists.email,
      },
      token,
    };
  }
}

