import { Box, Typography } from "@mui/material";
import { useGetTransactionsQuery } from "../services/transactions";
import { useAppSelector } from "../store/store";
import { selectActiveTab } from "../store/ui.slice";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const activeTab = useAppSelector(selectActiveTab);
  const transactions = useGetTransactionsQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      data:
        activeTab === "ALL"
          ? data
          : data?.filter((transaction) => transaction.type === activeTab),
    }),
  });

  if (transactions.isLoading || transactions.isUninitialized) {
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
