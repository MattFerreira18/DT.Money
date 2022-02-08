
export interface ICreateTransactionDto {
  title: string;
  type: 'DEPOSIT' | 'WITHDRAW';
  category: string;
  amount: number;
}
