import { Http, HttpServer } from '../../../../@types/http';
import { TransactionsStatisticsUseCase } from './TransactionsStatisticsUseCase';


export class TransactionsStatisticsController {
  constructor(private transactionsStatisticsUseCase: TransactionsStatisticsUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { id: userId } = req.user;

      const result = await this.transactionsStatisticsUseCase.execute({ userId });

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
