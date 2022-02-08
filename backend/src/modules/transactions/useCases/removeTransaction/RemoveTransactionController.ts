import { Http, HttpServer } from '../../../../@types/http';
import { RemoveTransactionUseCase } from './RemoveTransactionUseCase';

export class RemoveTransactionController {
  constructor(private readonly removeTransactionUseCase: RemoveTransactionUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { id: transactionId } = req.params;

      await this.removeTransactionUseCase.execute({ transactionId });

      return res.status(204).send();
    } catch (err) {
      next(err)
    }
  }
}
