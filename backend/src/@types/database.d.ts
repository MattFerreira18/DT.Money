import {
  PrismaClient,
  TransactionType as PrismaTransactionType,
  Transaction as PrismaTransaction,
  User as PrismaUser,
} from '@prisma/client';

import { repository } from '../infra/database';

export type Repository = typeof repository;

export namespace Entities {
  export type Transaction = PrismaTransaction;
  export type TransactionType = PrismaTransactionType;
  export type User = PrismaUser;
}
