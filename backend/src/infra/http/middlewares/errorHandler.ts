import { Http } from '../../../@types/http';

export function errorHandler(err: any, req: Http.Request, res: Http.Response, next: Http.Next) {
  if(err instanceof Error) {
    return res.status(500).json(err);
  }

  next(err);
}
