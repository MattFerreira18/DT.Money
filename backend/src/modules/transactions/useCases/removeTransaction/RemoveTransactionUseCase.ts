import { HttpException } from "../../../../errors/HttpException";
import { TransactionsRepository } from "../../repositories/TransactionsRepository"

interface IRequest {
  transactionId: string;
}

export class RemoveTransactionUseCase {
  constructor(private readonly transactionsRepository: TransactionsRepository) { }

  async execute({ transactionId }: IRequest): Promise<void> {
    const transactionExists = await this.transactionsRepository.findById(transactionId);

    if (!transactionExists) {
      throw new HttpException({
        code: 404,
        message: 'transaction not found',
      });
    }

    await this.transactionsRepository.remove(transactionId);
  }
}
