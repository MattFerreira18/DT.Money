import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/Global';

Modal.setAppElement('#root');

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModal={ () => setNewTransactionModalIsOpen(true) } 
      />

      <Dashboard />

      <NewTransactionModal 
        isOpen={ newTransactionModalIsOpen }
        onRequestClose={ () => setNewTransactionModalIsOpen(false) }
      />

      <GlobalStyle />
    </TransactionsProvider>
  )
}
