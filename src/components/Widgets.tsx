import { Stack } from "@mui/material";
import Widget from "./Widget";

export default function Widgets() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 3, sm: 2, md: 4 }}
      py={2.5}
      alignItems="stretch"
    >
      <Widget title="Budget:" amount={59000} variant="info" />
      <Widget title="Remaining:" amount={9000} variant="success" />
      <Widget title="Spent so far:" amount={159000} variant="error" />
    </Stack>
  );
}
