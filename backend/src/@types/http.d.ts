import { Request as ExpressRequest, Response as ExpressResponse } from 'express';

export namespace Http {
  export type Request = ExpressRequest;
  export type Response = ExpressResponse;
}

export type HttpServer = {
  req: Http.Request;
  res: Http.Response;
}
