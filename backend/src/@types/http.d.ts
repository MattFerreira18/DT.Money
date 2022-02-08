import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction
} from 'express';

export namespace Http {
  export type Request = ExpressRequest;
  export type Response = ExpressResponse;
  export type Next = ExpressNextFunction;
}

export type HttpServer = {
  req: Http.Request;
  res: Http.Response;
  next: Http.Next;
}
