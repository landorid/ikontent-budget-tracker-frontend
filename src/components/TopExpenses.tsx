import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useGetTransactionsQuery } from "../services/transactions";
import { TransactionType } from "../store/types/transactions.type";
import { formatCurrency } from "../utils";
import { styled } from "@mui/system";
const Text = styled(Typography)({
  fontFamily: "'Alegreya Sans', sans-serif",
  fontSize: 18,
  fontWeight: 900,
  lineHeight: 1,
});

export default function TopExpenses() {
  const transactions = useGetTransactionsQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      data: data
        ?.slice()
        .filter((transaction) => transaction.type === TransactionType.Expense)
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 3),
    }),
  });

  if (
    transactions.isLoading ||
    transactions.isUninitialized ||
    transactions.isError
  )
    return null;

  return (
    <Box
      sx={{ backgroundColor: "primary.main", py: 2, px: 3, borderRadius: 1 }}
    >
      <Text color="white" sx={{ mb: 1 }}>
        Top 3 expenses
      </Text>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        {transactions.data?.map((transaction, index) => (
          <Text key={transaction.id} color="white">{`${index + 1}. ${
            transaction.name
          } ${formatCurrency(transaction.amount)}`}</Text>
        ))}
      </Box>
    </Box>
  );
}
