import { Router } from "express";
import { transactionsController } from "../../app/core/TransactionsCore";

const transactionRouter = Router();


transactionRouter
  .get('/all', (req, res) => {
    transactionsController.findAll(req, res);
  })
  .get('/:id', (req, res) => {
    transactionsController.findOne(req, res);
  })
  .post('/', (req, res) => {
    transactionsController.create(req, res);
  })
  .delete('/:id', (req, res) => {
    transactionsController.remove(req, res);
  })

export { transactionRouter }
