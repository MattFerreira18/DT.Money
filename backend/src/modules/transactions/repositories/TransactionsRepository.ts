import { Repository } from "../../../@types/database";
import { ICreateTransactionDto } from "../dtos/ICreateTransactionDto";
import { Transaction } from "../entities/transaction";

export class TransactionsRepository {
  constructor(private readonly repository: Repository) { }

  async create({ title, category, type, amount }: ICreateTransactionDto): Promise<Transaction> {
    const transaction = await this.repository.transactions.create({
      data: {
        title,
        category,
        type,
        amount,
      }
    });

    return transaction;
  }

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.repository.transactions.findMany();

    return transactions;
  }

  async findById(id: string): Promise<Transaction> {
    const transaction = await this.repository.transactions.findUnique({
      where: {
        id,
      }
    });

    return transaction;
  }

  async findByTitle(title: string): Promise<Transaction> {
    const transaction = await this.repository.transactions.findUnique({
      where: {
        title,
      }
    });

    return transaction;
  }

  async remove(id: string): Promise<void> {
    await this.repository.transactions.delete({
      where: {
        id
      }
    });
  }
}
