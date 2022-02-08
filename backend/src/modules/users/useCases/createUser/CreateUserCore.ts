import { repository } from "src/infra/database";
import { EncryptProvider } from "src/providers/EncryptProvider";
import { Http } from "../../../../@types/http";
import { UsersRepository } from "../../repositories/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserCore {
  static async init(req: Http.Request, res: Http.Response, next: Http.Next) {
    const usersRepository = new UsersRepository(repository);
    const encryptProvider = new EncryptProvider();

    const createUserUseCase = new CreateUserUseCase(
      usersRepository,
      encryptProvider,
    );

    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController.handle({ req, res, next });
  }
}
