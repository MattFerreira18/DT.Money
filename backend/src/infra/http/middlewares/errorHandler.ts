import { HttpException } from 'src/errors/HttpException';
import { Http } from '../../../@types/http';

export function errorHandler(err: HttpException | Error, req: Http.Request, res: Http.Response, next: Http.Next) {
  console.log('---------');
  console.log('WHERE WHERE WHERE');
  console.log('---------');

  if (err instanceof HttpException) {
    return res.status(err?.code).json(err);
  }

  return res.status(500).json({
    code: 500,
    message: 'internal server error',
  });
}
