import { HttpException } from "src/errors/HttpException";
import { UsersRepository } from "src/modules/users/repositories/UsersRepository";
import { TransactionsRepository } from "../../repositories/TransactionsRepository";

interface IRequest {
  userId: string;
}

interface IResponse {
  total_transactions: number;
  total_deposits: number;
  total_withdraws: number;
}

export class TransactionsStatisticsUseCase {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly usersRepository: UsersRepository,
  ) { }

  async execute({ userId }: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findById(userId);

    if (!userExists) {
      throw new HttpException({
        code: 404,
        message: 'user not found',
      });
    }

    const totalTransactions = await this.transactionsRepository.count(undefined, userId);
    const totalDeposits = await this.transactionsRepository.count('DEPOSIT');
    const totalWithdraws = await this.transactionsRepository.count('WITHDRAW');

    return {
      total_transactions: totalTransactions,
      total_deposits: totalDeposits,
      total_withdraws: totalWithdraws,
    };
  }
}
