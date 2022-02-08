import { Http, HttpServer } from "../../../../@types/http";
import { TransactionOverviewUseCase } from "./TransactionOverviewUseCase";

export class TransactionOverviewController {
  constructor(private readonly transactionOverviewUseCase: TransactionOverviewUseCase) {}

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { id: transactionId } = req.body;

    const result = await this.transactionOverviewUseCase.execute({ transactionId });

    return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }
}
