import { repository } from "src/infra/database";
import { Http } from "../../../../@types/http";
import { TransactionsRepository } from "../../repositories/TransactionsRepository";
import { TransactionOverviewController } from "./TransactionOverviewController";
import { TransactionOverviewUseCase } from "./TransactionOverviewUseCase";

export class TransactionOverviewCore {
  static init(req: Http.Request, res: Http.Response) {
    const transactionsRepository = new TransactionsRepository(repository);

    const transactionOverviewUseCase = new TransactionOverviewUseCase(transactionsRepository);

    const transactionOverviewController = new TransactionOverviewController(transactionOverviewUseCase);

    return transactionOverviewController.handle({ req, res });
  }
}
