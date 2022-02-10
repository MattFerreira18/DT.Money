import { Transaction } from "../../entities/transaction";
import { TransactionsRepository } from "../../repositories/TransactionsRepository"

interface IRequest {
  userId: string
}

interface IResponse {
  transactions: Transaction[];
  total: number;
}

export class GetTransactionsUseCase {
  constructor(private readonly transactionsRepository: TransactionsRepository) { }

  async execute({ userId }: IRequest): Promise<IResponse> {
    const [transactions, total] = await this.transactionsRepository.findByUserId(userId);

    return { transactions, total };
  }
}
