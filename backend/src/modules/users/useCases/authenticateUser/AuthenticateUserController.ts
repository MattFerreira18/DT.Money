import { Http, HttpServer } from "../../../../@types/http";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


export class AuthenticateUserController {
  constructor(private readonly authenticateUserUseCase: AuthenticateUserUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { email, password } = req.body;

      const result = await this.authenticateUserUseCase.execute({
        email,
        password
      });

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

