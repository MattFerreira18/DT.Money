import { repository } from "src/infra/database";
import { EncryptProvider } from "src/providers/EncryptProvider";
import { TokenProvider } from "src/providers/TokenProvider";
import { Http } from "../../../../@types/http";
import { UsersRepository } from "../../repositories/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserCore {
  static init(req: Http.Request, res: Http.Response, next: Http.Next) {
    const usersRepository = new UsersRepository(repository);
    const encryptProvider = new EncryptProvider();
    const tokenProvider = new TokenProvider();

    const authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepository,
      encryptProvider,
      tokenProvider,
    );

    const authenticateUserController = new AuthenticateUserController(
      authenticateUserUseCase,
    );

    return authenticateUserController.handle({ req, res, next });
  }
}
