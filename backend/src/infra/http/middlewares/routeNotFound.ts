import { Http } from '../../../@types/http';

export function routeNotFound(req: Http.Request, res: Http.Response, next: Http.Next) {
  return res.status(500).json({
    status: 500,
    message: 'route does not exists',
  });
}
