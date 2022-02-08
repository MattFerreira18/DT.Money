import { PrismaClient, TransactionType as PrismaTransactionType, Transactions as PrismaTransaction } from '@prisma/client';

import { repository } from '../infra/database';

export type Repository = typeof repository;

export namespace Entities {
  export type Transaction = PrismaTransaction;
  export type TransactionType = PrismaTransactionType;
}
