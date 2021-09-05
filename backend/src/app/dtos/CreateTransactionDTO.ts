
export interface CreateTransactionDTO {
  title: string;
  type: 'DEPOSIT' | 'WITHDRAW';
  category: string;
  amount: number;
}
