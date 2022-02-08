import { Router } from "express";
import { CreateTransactionCore } from "src/modules/transactions/useCases/createTransaction/CreateTransactionCore";
import { GetTransactionsCore } from "src/modules/transactions/useCases/getTransactions/GetTransactionsCore";
import { RemoveTransactionCore } from "src/modules/transactions/useCases/removeTransaction/RemoveTransactionCore";
import { TransactionOverviewCore } from "src/modules/transactions/useCases/transactionOverview/TransactionOverviewCore";

const transactionRouter = Router();


transactionRouter
  .get('/all', (req, res) => {
    GetTransactionsCore.init(req, res);
  })
  .get('/:id', (req, res) => {
    TransactionOverviewCore.init(req, res);
  })
  .post('/', (req, res) => {
    CreateTransactionCore.init(req, res);
  })
  .delete('/:id', (req, res) => {
    RemoveTransactionCore.init(req, res);
  })

export { transactionRouter }
