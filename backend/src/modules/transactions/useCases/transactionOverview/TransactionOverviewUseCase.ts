import { HttpException } from "../../../../errors/HttpException";
import { Transaction } from "../../entities/transaction"
import { TransactionsRepository } from "../../repositories/TransactionsRepository"

interface IRequest {
  transactionId: string;
}

interface IResponse {
  transaction: Transaction;
}

export class TransactionOverviewUseCase {
  constructor(private readonly transactionsRepository: TransactionsRepository) { }

  async execute({ transactionId }: IRequest): Promise<IResponse> {
    const transactionExists = await this.transactionsRepository.findById(transactionId);

    if (!transactionExists) {
      throw new HttpException({
        code: 404,
        message: 'transaction not found',
      });
    }

    Object.assign(transactionExists, {
      amount: transactionExists.amount / 100,
    })

    return { transaction: transactionExists };
  }
}
