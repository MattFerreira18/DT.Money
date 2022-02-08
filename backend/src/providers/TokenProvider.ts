import jwt from 'jsonwebtoken';

export class TokenProvider {
  create(data: any): string {
    const token = jwt.sign(data, process.env.PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: '30m',
    });

    return token;
  }
}
