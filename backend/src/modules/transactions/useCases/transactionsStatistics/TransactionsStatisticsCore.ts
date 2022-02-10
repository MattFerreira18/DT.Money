import { repository } from "../../../../infra/database";
import { UsersRepository } from "../../../users/repositories/UsersRepository";
import { Http } from "../../../../@types/http";
import { TransactionsRepository } from "../../repositories/TransactionsRepository";
import { TransactionsStatisticsUseCase } from "./TransactionsStatisticsUseCase";
import { TransactionsStatisticsController } from "./TransactionsStatisticsController";

export class transactionsStatisticsCore {
  static init(req: Http.Request, res: Http.Response, next: Http.Next) {
    const transactionsRepository = new TransactionsRepository(repository);
    const usersRepository = new UsersRepository(repository);

    const transactionsStatisticsUseCase = new TransactionsStatisticsUseCase(
      transactionsRepository,
      usersRepository,
    );

    const transactionsStatisticsController = new TransactionsStatisticsController(
      transactionsStatisticsUseCase,
    );

    return transactionsStatisticsController.handle({ req, res, next });
  }
}
