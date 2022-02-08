import { Http, HttpServer } from "../../../../@types/http";
import { GetUserProfileUseCase } from "./GetUserProfileUseCase";


export class GetUserProfileController {
  constructor(private readonly getUserProfileUseCase: GetUserProfileUseCase) { }

  async handle({ req, res, next }: HttpServer): Promise<Http.Response> {
    try {
      const { id: userId } = req.user;

      const result = await this.getUserProfileUseCase.execute({ userId });

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

