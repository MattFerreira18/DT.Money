import { repository } from "../../../../infra/database";
import { TransactionsRepository } from "../../repositories/TransactionsRepository";
import { RemoveTransactionController } from "./RemoveTransactionController";
import { RemoveTransactionUseCase } from "./RemoveTransactionUseCase";
import { Http } from '../../../../@types/http';

export class RemoveTransactionCore {
  static async init(req: Http.Request, res: Http.Response) {
    const transactionsRepository = new TransactionsRepository(repository);

    const removeTransactionUseCase = new RemoveTransactionUseCase(transactionsRepository);

    const removeTransactionController = new RemoveTransactionController(removeTransactionUseCase);

    removeTransactionController.handle({ req, res });
  }
}
