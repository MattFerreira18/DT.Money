import { TransactionsRepository } from "../../repositories/TransactionsRepository"

interface IRequest {
  transactionId: string;
}

export class RemoveTransactionUseCase {
  constructor(private readonly transactionsRepository: TransactionsRepository) { }

  async execute({ transactionId }: IRequest): Promise<void> {
    const transactionExists = await this.transactionsRepository.findById(transactionId);

    if (!transactionExists) {}

    await this.transactionsRepository.remove(transactionId);
  }
}
