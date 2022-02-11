import { Http, HttpServer } from '../../../../@types/http';
import { IUpdateUserDto } from '../../dtos/IUpdateUserDto';
import { UpdateUserUseCase } from './UpdateUserUseCase';


export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { name, email, password }: IUpdateUserDto = req.body;

      await this.updateUserUseCase.execute({
        name,
        email,
        password,
      });

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
