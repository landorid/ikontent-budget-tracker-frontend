import ClearIcon from "@mui/icons-material/Clear";
import { Box, Chip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useDeleteTransactionMutation } from "../services/transactions";
import { Transaction, TransactionType } from "../store/types/transactions.type";
import { formatCurrency } from "../utils";

export default function TransactionItem(props: Transaction) {
  const [deleteTransaction] = useDeleteTransactionMutation();

  const { name, amount, type, id } = props;

  const handleDelete = () => {
    deleteTransaction(id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        py: 1,
        px: 2,
        borderBottom: "solid 1px #ddd",
        "&:last-child": {
          borderBottom: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flex: 1,
          mr: 2,
        }}
      >
        <Typography>{name}</Typography>
        <Chip
          label={formatCurrency(amount)}
          color={type === TransactionType.Expense ? "error" : "success"}
        />
      </Box>

      <IconButton
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          width: 22,
          height: 22,
          "&:hover": {
            backgroundColor: "secondary.main",
          },
        }}
        onClick={handleDelete}
      >
        <ClearIcon
          sx={{
            width: 16,
            height: 16,
          }}
        />
      </IconButton>
    </Box>
  );
}
