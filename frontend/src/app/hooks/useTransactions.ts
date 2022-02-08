import { useContext } from "react";

import { TransactionsContext } from "../contexts/TransactionsContext";

export function useTransactions() {
  const context = useContext(TransactionsContext);
  
  return context;
}
