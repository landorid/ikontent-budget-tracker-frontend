import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Transaction } from "../store/types/transactions.type";

type TransactionsResponse = Transaction[];

export const transactionsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ["Transactions"],
  endpoints: (build) => ({
    getTransactions: build.query<TransactionsResponse, void>({
      query: () => "transactions",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Transactions" as const,
                id,
              })),
              { type: "Transactions", id: "LIST" },
            ]
          : [{ type: "Transactions", id: "LIST" }],
    }),
    addTransaction: build.mutation<Transaction, Partial<Transaction>>({
      query: (body) => ({
        url: `transactions`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Transactions", id: "LIST" }],
    }),
    deleteTransaction: build.mutation<{ success: boolean; id: number }, number>(
      {
        query(id) {
          return {
            url: `transactions/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: (result, error, id) => [{ type: "Transactions", id }],
      }
    ),
  }),
});

export const {
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = transactionsApi;
