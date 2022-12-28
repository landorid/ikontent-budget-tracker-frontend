import { Divider, Typography } from "@mui/material";
import Container from "@mui/material/Container";
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
    </Container>
  );
}

export default App;
