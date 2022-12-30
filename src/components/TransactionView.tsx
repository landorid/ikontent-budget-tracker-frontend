import { Box } from "@mui/material";
import TabNavigation from "./TabNavigation";
import TransactionList from "./TransactionList";

export default function TransactionView() {
  return (
    <Box sx={{ mt: 2 }}>
      <TabNavigation />
      <TransactionList />
    </Box>
  );
}
