import { Http } from "src/@types/http";
import { HttpException } from "src/errors/HttpException";


export function errorHandler(
  error: HttpException | Error,
  req: Http.Request,
  res: Http.Response,
  ) {
  if (error instanceof HttpException) {
    return res.status(error?.code).json(error);
  }

  return res.status(500).json({
    code: 500,
    message: 'internal server error',
  });
}
