import { Box } from "@mui/material";
import TabNavigation from "./TabNavigation";
import TransactionList from "./TransactionList";
import SearchBar from "./SearchBar";
import TopExpenses from "./TopExpenses";

export default function TransactionView() {
  return (
    <Box
      sx={{
        "& > :not([hidden]) ~ :not([hidden])": {
          mt: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          "& > * ": {
            mt: 2,
          },
        }}
      >
        <TabNavigation />
        <SearchBar />
      </Box>
      <TopExpenses />
      <TransactionList />
    </Box>
  );
}
