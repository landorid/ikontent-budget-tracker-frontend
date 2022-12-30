import { Box, Typography } from "@mui/material";
import { useGetTransactionsQuery } from "../services/transactions";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const transactions = useGetTransactionsQuery();

  if (transactions.isLoading) {
    return <p>loading</p>;
  }

  if (transactions.isError) {
    return <p>error</p>;
  }

  const transactionsData = transactions.data?.slice().reverse() || [];

  if (!transactions.data?.length) {
    return <Typography sx={{ mt: 2 }}>No transactions found!</Typography>;
  }

  return (
    <Box
      sx={{
        opacity: transactions.isFetching ? 0.7 : 1,
        border: "solid 1px #ddd",
        borderRadius: 1,
        mt: 2,
      }}
    >
      {transactionsData.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          name={transaction.name}
          amount={transaction.amount}
          id={transaction.id}
          type={transaction.type}
        />
      ))}
    </Box>
  );
}
