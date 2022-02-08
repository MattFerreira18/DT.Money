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

    if (!transactionExists) {}

    return { transaction: transactionExists };
  }
}
