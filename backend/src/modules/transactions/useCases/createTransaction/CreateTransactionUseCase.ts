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

    if (transactionAlreadyExists) {}

    if (type !== 'DEPOSIT' && type !== 'WITHDRAW') {}

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
