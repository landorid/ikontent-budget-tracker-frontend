import { Box, Typography } from "@mui/material";
import { useGetTransactionsQuery } from "../services/transactions";
import { useAppSelector } from "../store/store";
import { selectActiveTab, selectSearchText } from "../store/ui.slice";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const activeTab = useAppSelector(selectActiveTab);
  const searchText = useAppSelector(selectSearchText);
  const transactions = useGetTransactionsQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      data: data
        ?.filter((transaction) => {
          if (activeTab === "ALL") return true;
          return transaction.type === activeTab;
        })
        .filter((transaction) => {
          if (!searchText || searchText === "") return true;

          return transaction.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
        }),
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
