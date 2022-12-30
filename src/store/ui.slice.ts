import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TransactionType } from "./types/transactions.type";

type initialState = {
  activeTab: TransactionType | "ALL";
  search?: string;
};

const initialState: initialState = {
  activeTab: "ALL",
  search: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TransactionType | "ALL">) => {
      state.activeTab = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const selectActiveTab = (state: RootState) => state.ui.activeTab;
export const selectSearchText = (state: RootState) => state.ui.search;
export const { setActiveTab, setSearch } = uiSlice.actions;
export const { reducer: uiReducer } = uiSlice;
