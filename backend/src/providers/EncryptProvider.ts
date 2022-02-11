import bcrypt from 'bcrypt';

export class EncryptProvider {
  async hash(data: string): Promise<string> {
    return bcrypt.hash(data, 12);
  }

  async compare(data: string, hash: string): Promise<boolean> {
    return bcrypt.compare(data, hash);
  }
}
