import { Button, ButtonGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import { TransactionType } from "../store/types/transactions.type";
import { selectActiveTab, setActiveTab } from "../store/ui.slice";

export default function TabNavigation() {
  const activeTab = useAppSelector(selectActiveTab);
  const dispatch = useAppDispatch();

  const tabs = [...Object.values(TransactionType), "ALL"];
  const handleOnClick = (type: any) => () => {
    dispatch(setActiveTab(type));
  };
  return (
    <ButtonGroup variant="outlined">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={tab === activeTab ? "contained" : "outlined"}
          disableElevation
          onClick={handleOnClick(tab)}
          sx={{ flex: { xs: 1, md: "auto" } }}
        >
          {tab}
        </Button>
      ))}
    </ButtonGroup>
  );
}
