import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW';
  category: string;
  createdAt: string; 
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode;
}


type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>; 
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const { isAuthenticated } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    if (isAuthenticated) {
      api.get('/transactions')
        .then(response => setTransactions(response.data));
    }
  }, []);
  
  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post('/transactions', transaction);
    const transactionData = response.data;

    setTransactions(prev => ([ ...prev, transactionData ]));
  }

  const contextData = {
    transactions,
    createTransaction,
  };

  return (
    <TransactionsContext.Provider value={contextData}>
      { children }
    </TransactionsContext.Provider>
  );
}

