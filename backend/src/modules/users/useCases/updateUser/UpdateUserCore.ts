import { Http } from "../../../../@types/http";
import { repository } from "../../../../infra/database";
import { TokenProvider } from "../../../../providers/TokenProvider";
import { UsersRepository } from "../../repositories/UsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class updateUserCore {
  static init(req: Http.Request, res: Http.Response, next: Http.Next) {
    const usersRepository = new UsersRepository(repository);
    const tokenProvider = new TokenProvider();

    const updateUserUseCase = new UpdateUserUseCase(
      usersRepository,
      tokenProvider,
    );

    const updateUserController = new UpdateUserController(
      updateUserUseCase,
    );

    return updateUserController.handle({ req, res, next });
  }
}
