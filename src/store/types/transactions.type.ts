export enum TransactionType {
  Expense = "EXPENSE",
  Income = "INCOME",
}

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: TransactionType;
}
