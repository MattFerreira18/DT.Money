import { TransactionsController } from "../controllers/TransactionsController";
import { TransactionsRepository } from "../repositories/TransactionsRepository";

const transactionsRepository = new TransactionsRepository();
const transactionsController = new TransactionsController(transactionsRepository);

export { transactionsController }
