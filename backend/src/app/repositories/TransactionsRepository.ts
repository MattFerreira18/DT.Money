import { Transactions } from "@prisma/client";

import { repository } from "../../database";
import { CreateTransactionDTO } from "../dtos/CreateTransactionDTO";

export class TransactionsRepository {
  async create({ title, category, type, amount }: CreateTransactionDTO): Promise<Transactions> {
    try {
      const transaction = await repository.transactions.create({
        data: {
          title,
          category,
          type,
          amount,
        }
      });

      return transaction;
    } catch (err) {
      return err;
    } finally {
      repository.$disconnect();
    }
  }

  async findAll(): Promise<Transactions[]> {
    const transactions = await repository.transactions.findMany();

    return transactions;
  }

  async findById(id: string): Promise<Transactions> {
    const transaction = await repository.transactions.findUnique({
      where: {
        id,
      }
    });

    return transaction;
  }

  async findByTitle(title: string): Promise<Transactions> {
    const transaction = await repository.transactions.findUnique({
      where: {
        title,
      }
    });

    return transaction;
  }

  async remove(id: string): Promise<void> {
    await repository.transactions.delete({
      where: {
        id
      }
    });
  }
}
