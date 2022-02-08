interface IExceptionParams {
  code: number;
  message: string;
}

export class HttpException {
  code: number;
  message: string;

  constructor(
    params: IExceptionParams = {
      code: 500,
      message: 'internal server error',
    },
  ) {
    this.code = params.code;
    this.message = params.message;
  }
}
