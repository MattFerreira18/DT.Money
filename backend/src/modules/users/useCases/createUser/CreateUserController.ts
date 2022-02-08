
import { Http, HttpServer } from "../../../../@types/http";
import { ICreateUserDto } from "../../dtos/ICreateUserDto";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const {
        name,
        email,
        password,
      }: ICreateUserDto = req.body;

      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return res.status(201).send();
    } catch (err) {
      next(err);
    }
  }
}

