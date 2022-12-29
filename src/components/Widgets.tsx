import { Stack } from "@mui/material";
import { BUDGET } from "../config/defaults";
import { useGetTransactionsQuery } from "../services/transactions";
import { TransactionType } from "../store/types/transactions.type";
import Widget from "./Widget";

export default function Widgets() {
  const transactions = useGetTransactionsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      counter: result.data
        ?.filter((transaction) => transaction.type === TransactionType.Expense)
        .reduce((sum, transaction) => sum + transaction.amount, 0),
    }),
  });

  if (transactions.isLoading) {
    return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2, md: 4 }}
        py={2.5}
        alignItems="stretch"
      >
        <Widget title="Budget:" amount={BUDGET} variant="info" />
        <Widget title="Remaining:" variant="success" amount={0} isLoading />
        <Widget title="Spent so far:" variant="error" amount={0} isLoading />
      </Stack>
    );
  }

  const spentSoFar = transactions.counter || 0;

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 3, sm: 2, md: 4 }}
      py={2.5}
      alignItems="stretch"
    >
      <Widget title="Budget:" amount={BUDGET} variant="info" />
      <Widget
        title="Remaining:"
        amount={BUDGET - spentSoFar}
        variant="success"
      />
      <Widget title="Spent so far:" amount={spentSoFar} variant="error" />
    </Stack>
  );
}
