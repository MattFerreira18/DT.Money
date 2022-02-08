import { Transaction } from "../../entities/transaction";
import { TransactionsRepository } from "../../repositories/TransactionsRepository"

interface IResponse {
  transactions: Transaction[];
  total: number;
}

export class GetTransactionsUseCase {
  constructor(private readonly transactionsRepository: TransactionsRepository) { }

  async execute(): Promise<IResponse> {
    const transactions = await this.transactionsRepository.findAll();
    const total = transactions.length;

    return { transactions, total };
  }
}
