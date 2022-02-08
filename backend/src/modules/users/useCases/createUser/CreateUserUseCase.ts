
import { HttpException } from 'src/errors/HttpException';
import { EncryptProvider } from 'src/providers/EncryptProvider';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { UsersRepository } from '../../repositories/UsersRepository';

interface IRequest extends ICreateUserDto {}

export class CreateUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptProvider: EncryptProvider,
  ) { }

  async execute({ name, email, password }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new HttpException({
        code: 409,
        message: 'user already exists',
      });
    }

    const passwordHash = await this.encryptProvider.hash(password);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

