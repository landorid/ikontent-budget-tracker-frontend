import { Box, Typography } from "@mui/material";

interface WidgetProps {
  title: string;
  amount: number;
  variant: "info" | "error" | "success";
}

export default function Widget(props: WidgetProps) {
  const { variant, title, amount } = props;
  const formattedAmount = amount.toLocaleString("hu-HU");

  return (
    <Box
      bgcolor={`${variant}.main`}
      borderRadius={2}
      py={2.5}
      px={2}
      flexDirection="column"
      alignItems="center"
      display="flex"
      flex={1}
    >
      <div>
        <Typography fontSize={12} color="white" fontWeight={700} lineHeight={1}>
          {title}
        </Typography>
        <Typography color="white" variant="subtitle1">
          {formattedAmount} HUF
        </Typography>
      </div>
    </Box>
  );
}
