import { Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import CashFlowForm from "./components/CashFlowForm";
import DoughnutChart from "./components/DoughnutChart";
import TransactionView from "./components/TransactionView";
import Widgets from "./components/Widgets";

function App() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" py={2}>
        My Budget Planner
      </Typography>

      <Divider />
      <Widgets />
      <Divider />

      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={4}>
          <Typography variant="h2" py={2}>
            Cash flow
          </Typography>
          <CashFlowForm />
          <Typography variant="h2" py={2}>
            Chart
          </Typography>
          <DoughnutChart />
        </Grid>

        <Grid item xs={12} md={7} lg={8}>
          <TransactionView />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
