import { Box } from "@mui/material";
import TabNavigation from "./TabNavigation";
import TransactionList from "./TransactionList";
import SearchBar from "./SearchBar";

export default function TransactionView() {
  return (
    <Box>
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
      <TransactionList />
    </Box>
  );
}
