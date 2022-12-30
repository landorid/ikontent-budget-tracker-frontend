import { useGetTransactionsQuery } from "../services/transactions";
import { TransactionType } from "../store/types/transactions.type";

export function useTransactionsStat() {
  return useGetTransactionsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      expense:
        result.data
          ?.filter(
            (transaction) => transaction.type === TransactionType.Expense
          )
          .reduce((sum, transaction) => sum + transaction.amount, 0) || 0,
      income:
        result.data
          ?.filter((transaction) => transaction.type === TransactionType.Income)
          .reduce((sum, transaction) => sum + transaction.amount, 0) || 0,
    }),
  });
}
