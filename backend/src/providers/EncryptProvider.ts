import bcrypt from 'bcrypt';

export class EncryptProvider {
  private readonly salt: 12;

  async hash(data: string): Promise<string> {
    return bcrypt.hashSync(data, this.salt);
  }

  async compare(data: string, hash: string): Promise<boolean> {
    return bcrypt.compareSync(data, hash);
  }
}
