import { Router } from "express";

import { CreateTransactionCore } from "src/modules/transactions/useCases/createTransaction/CreateTransactionCore";
import { GetTransactionsCore } from "src/modules/transactions/useCases/getTransactions/GetTransactionsCore";
import { RemoveTransactionCore } from "src/modules/transactions/useCases/removeTransaction/RemoveTransactionCore";
import { TransactionOverviewCore } from "src/modules/transactions/useCases/transactionOverview/TransactionOverviewCore";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const transactionRoutes = Router();


transactionRoutes
  .get(
    '/all',
    ensureAuthenticated,
    (req, res, next) => GetTransactionsCore.init(req, res, next),
  )
  .get(
    '/:id', (req, res, next) => TransactionOverviewCore.init(req, res, next),
  )
  .post(
    '/',
    ensureAuthenticated,
    (req, res, next) => CreateTransactionCore.init(req, res, next),
  )
  .delete(
    '/:id',
    ensureAuthenticated,
    (req, res, next) => RemoveTransactionCore.init(req, res, next),
  )

export { transactionRoutes }
