import { HttpException } from "src/errors/HttpException";
import { TokenProvider } from "src/providers/TokenProvider";
import { Http } from "../../../@types/http";

interface ITokenSubject {
  id: string;
  email: string;
}

export function ensureAuthenticated(req: Http.Request, res: Http.Response, next: Http.Next): void {
  const { authorization } = req.headers;

  if (!authorization || authorization === 'Bearer undefined') {
    throw new HttpException({
      code: 401,
      message: 'authentication not found',
    });
  }

  const token = authorization.split(' ').pop();

  const tokenProvider = new TokenProvider();

  const tokenSubject = tokenProvider.verify<ITokenSubject>(token);

  if (!tokenSubject) {
    throw new HttpException({
      code: 401,
      message: 'token is invalid',
    });
  }

  const { id, email } = tokenSubject;

  req.user = { id, email };

  return next();
}
