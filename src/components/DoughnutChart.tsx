import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useTransactionsStat } from "../hooks/transactions-stat";

ChartJS.register(ArcElement, Tooltip, Legend);

const PercentageText = styled(Typography)({
  fontFamily: "'Alegreya', serif",
  fontWeight: 800,
  fontSize: 64,
  lineHeight: 1,
});
export default function DoughnutChart() {
  const transactions = useTransactionsStat();
  if (
    transactions.isLoading ||
    transactions.isUninitialized ||
    transactions.isError
  ) {
    return null;
  }

  const budget = transactions.income;
  const remaining =
    transactions.income - transactions.expense > 0
      ? transactions.income - transactions.expense
      : 0;
  const spent = transactions.expense;

  const percentage = Math.round((spent / transactions.income) * 100);

  return (
    <Box sx={{ position: "relative", textAlign: "center" }}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: 140,
          height: 140,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <PercentageText>{percentage}%</PercentageText>
        <Typography>of budget spent</Typography>
      </Box>
      <Doughnut
        style={{ margin: "0 auto" }}
        data={{
          labels: ["Budget", "Remaining", "Spent so far"],
          datasets: [
            {
              data: [budget, remaining, spent],
              backgroundColor: ["#0275D8", "#5CB85C", "#D9534F"],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </Box>
  );
}
