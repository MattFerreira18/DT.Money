import { Http, HttpServer } from "../../../../@types/http";
import { GetTransactionsUseCase } from "./GetTransactionsUseCase";

export class GetTransactionsController {
  constructor(private readonly getTransactionsUseCase: GetTransactionsUseCase) {}

  async handle({ req, res }: HttpServer): Promise<Http.Response> {
    const result = await this.getTransactionsUseCase.execute();

    return res.status(200).json(result);
  }
}
