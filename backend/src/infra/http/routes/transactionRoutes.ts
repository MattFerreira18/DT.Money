import { Router } from "express";

import { CreateTransactionCore } from "src/modules/transactions/useCases/createTransaction/CreateTransactionCore";
import { GetTransactionsCore } from "src/modules/transactions/useCases/getTransactions/GetTransactionsCore";
import { RemoveTransactionCore } from "src/modules/transactions/useCases/removeTransaction/RemoveTransactionCore";
import { TransactionOverviewCore } from "src/modules/transactions/useCases/transactionOverview/TransactionOverviewCore";

const transactionRoutes = Router();


transactionRoutes
  .get('/all', (req, res, next) => {
    GetTransactionsCore.init(req, res, next);
  })
  .get('/:id', (req, res, next) => {
    TransactionOverviewCore.init(req, res, next);
  })
  .post('/', (req, res, next) => {
    CreateTransactionCore.init(req, res, next);
  })
  .delete('/:id', (req, res, next) => {
    RemoveTransactionCore.init(req, res, next);
  })

export { transactionRoutes }
