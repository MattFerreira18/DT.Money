import { TransactionsRepository } from "../../repositories/TransactionsRepository";
import { repository } from '../../../../infra/database';
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";
import { CreateTransactionController } from "./CreateTransactionController";
import { Http } from '../../../../@types/http';

export class CreateTransactionCore {
  static init(req: Http.Request, res: Http.Response, next: Http.Next) {
    const transactionsRepository = new TransactionsRepository(repository);

  const createTransactionUseCase = new CreateTransactionUseCase(
    transactionsRepository,
  );

  const createTransactionController = new CreateTransactionController(
    createTransactionUseCase,
  );

  return createTransactionController.handle({ req, res, next });
  }
}
