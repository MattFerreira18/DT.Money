import { Http, HttpServer } from '../../../../@types/http';
import { ICreateTransactionDto } from '../../dtos/ICreateTransactionDto';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  constructor(private readonly createTransactionUseCase: CreateTransactionUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { title, type, category, amount } = req.body as ICreateTransactionDto;

      const result = await this.createTransactionUseCase.execute({
        title,
        type,
        category,
        amount,
      });

      return res.status(201).json(result);
    } catch (err) {
      next(err)
    }
  }
}
