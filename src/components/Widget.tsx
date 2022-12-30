import { Box, Skeleton, Typography } from "@mui/material";
import { formatCurrency } from "../utils";

interface WidgetProps {
  title: string;
  amount: number;
  variant: "info" | "error" | "success";
  isLoading?: boolean;
}

export default function Widget(props: WidgetProps) {
  const { variant, title, amount, isLoading } = props;

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
        {isLoading ? (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1.5rem", lineHeight: 1 }}
            width={110}
          />
        ) : (
          <Typography color="white" variant="subtitle1">
            {formatCurrency(amount)}
          </Typography>
        )}
      </div>
    </Box>
  );
}
