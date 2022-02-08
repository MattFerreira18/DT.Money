import { repository } from 'src/infra/database';
import { Http } from '../../../../@types/http';
import { TransactionsRepository } from '../../repositories/TransactionsRepository';
import { GetTransactionsController } from './GetTransactionsController';
import { GetTransactionsUseCase } from './GetTransactionsUseCase';

export class GetTransactionsCore {
  static init(req: Http.Request, res: Http.Response) {
    const transactionsRepository = new TransactionsRepository(repository);

    const getTransactionsUseCase = new GetTransactionsUseCase(transactionsRepository);

    const getTransactionsController = new GetTransactionsController(getTransactionsUseCase);

    return getTransactionsController.handle({ req, res });
  }
}
