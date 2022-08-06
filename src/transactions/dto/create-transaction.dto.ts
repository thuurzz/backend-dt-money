export class CreateTransactionDto {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}
