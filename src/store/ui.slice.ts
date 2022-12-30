import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TransactionType } from "./types/transactions.type";

type initialState = {
  activeTab: TransactionType | "ALL";
};

const initialState: initialState = {
  activeTab: "ALL",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TransactionType | "ALL">) => {
      state.activeTab = action.payload;
    },
  },
});

export const selectActiveTab = (state: RootState) => state.ui.activeTab;
export const { setActiveTab } = uiSlice.actions;
export const { reducer: uiReducer } = uiSlice;
