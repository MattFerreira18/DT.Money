import jwt from 'jsonwebtoken';

export class TokenProvider {
  create(data: any): string {
    const token = jwt.sign({ sub: data }, process.env.PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: '30m',
    });

    return token;
  }

  verify<TokenPayload = string>(token: string): TokenPayload {
    try {
      const decoded = jwt.verify(token, process.env.PRIVATE_KEY, { algorithms: ['RS256'] });

      const { sub: subject } = decoded as unknown as { sub: TokenPayload };

      return subject;
    } catch (err) {
      return err;
    }
  }
}
