import { Stack } from "@mui/material";
import { useTransactionsStat } from "../hooks/transactions-stat";
import Widget from "./Widget";

export default function Widgets() {
  const transactions = useTransactionsStat();

  if (transactions.isLoading || transactions.isUninitialized) {
    return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2, md: 4 }}
        py={2.5}
        alignItems="stretch"
      >
        <Widget title="Budget:" amount={0} variant="info" />
        <Widget title="Remaining:" variant="success" amount={0} isLoading />
        <Widget title="Spent so far:" variant="error" amount={0} isLoading />
      </Stack>
    );
  }

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 3, sm: 2, md: 4 }}
      py={2.5}
      alignItems="stretch"
    >
      <Widget title="Budget:" amount={transactions.income} variant="info" />
      <Widget
        title="Remaining:"
        amount={transactions.income - transactions.expense}
        variant="success"
      />
      <Widget
        title="Spent so far:"
        amount={transactions.expense}
        variant="error"
      />
    </Stack>
  );
}
