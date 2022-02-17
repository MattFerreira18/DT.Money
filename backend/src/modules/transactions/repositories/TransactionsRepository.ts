import { Repository } from "../../../@types/database";
import { ICreateTransactionDto } from "../dtos/ICreateTransactionDto";
import { Transaction } from "../entities/transaction";

export class TransactionsRepository {
  constructor(private readonly repository: Repository) { }

  async create({
    title,
    category,
    type,
    amount,
    userId,
  }: ICreateTransactionDto): Promise<Transaction> {
    const transaction = await this.repository.transaction.create({
      data: {
        title,
        category,
        type,
        amount,
        userId,
      }
    });

    return transaction;
  }

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.repository.transaction.findMany();

    return transactions;
  }

  async findById(id: string): Promise<Transaction> {
    const transaction = await this.repository.transaction.findUnique({
      where: {
        id,
      }
    });

    return transaction;
  }

  async findByTitle(title: string, userId: string): Promise<Transaction> {
    const transaction = await this.repository.transaction.findFirst({
      where: {
        title,
        userId,
      }
    });

    return transaction;
  }

  async findByUserId(userId: string): Promise<[Transaction[], number]> {
    const transactions = await this.repository.transaction.findMany({
      where: {
        userId
      },
    });

    const total = await this.repository.transaction.count({
      where: {
        userId
      },
    });

    return [transactions, total];
  }

  async count(filter?: 'DEPOSIT' | 'WITHDRAW', userId?: string): Promise<number> {
    let total: number;

    if (filter) {
      const result = await this.repository.transaction.aggregate({
        where: {
          type: filter,
        },
        _count: {
          amount: true,
        },
      });

      total = result._count.amount;
    } else {
      total = await this.repository.transaction.count({ where: { userId } });
    }

    return total;
  }

  async remove(id: string): Promise<void> {
    await this.repository.transaction.delete({
      where: {
        id
      }
    });
  }
}
