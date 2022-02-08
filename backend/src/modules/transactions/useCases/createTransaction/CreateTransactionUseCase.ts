import { HttpException } from "../../../../errors/HttpException";
import { ICreateTransactionDto } from "../../dtos/ICreateTransactionDto"
import { Transaction } from "../../entities/transaction"
import { TransactionsRepository } from "../../repositories/TransactionsRepository"

interface IRequest extends ICreateTransactionDto {}

interface IResponse {
  transaction: Transaction;
}

export class CreateTransactionUseCase {
  constructor(private readonly transactionsRepository: TransactionsRepository) { }

  async execute({ title, type, category, amount }: IRequest): Promise<IResponse> {
    const transactionAlreadyExists = await this.transactionsRepository.findByTitle(title);

    if (transactionAlreadyExists) {
      throw new HttpException({
        code: 409,
        message: 'transaction already exists',
      });
    }

    if (type !== 'DEPOSIT' && type !== 'WITHDRAW') {
      throw new HttpException({
        code: 409,
        message: 'invalid amount type',
      });
    }

    if (amount < 0) {}

    const transaction = await this.transactionsRepository.create({
      title,
      type,
      category,
      amount,
    });

    return { transaction };
  }
}
