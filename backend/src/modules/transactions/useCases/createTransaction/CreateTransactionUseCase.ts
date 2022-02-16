import { UsersRepository } from "src/modules/users/repositories/UsersRepository";
import { HttpException } from "../../../../errors/HttpException";
import { ICreateTransactionDto } from "../../dtos/ICreateTransactionDto"
import { Transaction } from "../../entities/transaction"
import { TransactionsRepository } from "../../repositories/TransactionsRepository"

interface IRequest extends ICreateTransactionDto { }

interface IResponse {
  transaction: Transaction;
}

export class CreateTransactionUseCase {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly usersRepository: UsersRepository,
  ) { }

  async execute({ title, type, category, amount, userId }: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findById(userId);

    if (!userExists) {
      throw new HttpException({
        code: 404,
        message: 'user does not exists',
      });
    }

    const transactionAlreadyExists = await this.transactionsRepository.findByTitle(title);

    if (transactionAlreadyExists) {
      throw new HttpException({
        code: 409,
        message: 'transaction already exists',
      });
    }

    if (amount < 0) {
      throw new HttpException({
        code: 409,
        message: 'invalid amount',
      });
    }

    if (type !== 'DEPOSIT' && type !== 'WITHDRAW') {
      throw new HttpException({
        code: 409,
        message: 'invalid transaction type',
      });
    }

    const transaction = await this.transactionsRepository.create({
      title,
      type,
      category,
      amount,

    });

    return { transaction };
  }
}
