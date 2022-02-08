import { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { Header } from './ui/components/Header';
import { Dashboard } from './ui/components/Dashboard';
import { NewTransactionModal } from './ui/components/NewTransactionModal';
import { TransactionsProvider } from './app/contexts/TransactionsContext';
import { GlobalStyle } from './ui/styles/global';
import { theme } from './ui/styles/theme';

Modal.setAppElement('#root');

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header
          onOpenNewTransactionModal={() => setNewTransactionModalIsOpen(true)}
        />

        <Dashboard />

        <NewTransactionModal
          isOpen={newTransactionModalIsOpen}
          onRequestClose={() => setNewTransactionModalIsOpen(false)}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
