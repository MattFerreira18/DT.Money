import { Http, HttpServer } from "../../../../@types/http";
import { GetTransactionsUseCase } from "./GetTransactionsUseCase";

export class GetTransactionsController {
  constructor(private readonly getTransactionsUseCase: GetTransactionsUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { id: userId } = req.user;

      const result = await this.getTransactionsUseCase.execute({ userId });

      return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }
}
