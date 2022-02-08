import { repository } from "src/infra/database";
import { Http } from "../../../../@types/http";
import { UsersRepository } from "../../repositories/UsersRepository";
import { GetUserProfileController } from "./GetUserProfileController";
import { GetUserProfileUseCase } from "./GetUserProfileUseCase";

export class GetUserProfileCore {
  static init(req: Http.Request, res: Http.Response, next: Http.Next) {
    const usersRepository = new UsersRepository(repository);

    const getUserProfileUseCase = new GetUserProfileUseCase(usersRepository);

    const getUserProfileController = new GetUserProfileController(getUserProfileUseCase);

    return getUserProfileController.handle({ req, res, next });
  }
}
