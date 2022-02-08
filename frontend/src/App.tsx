import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { Routes } from './app/routes';
import { TransactionsProvider } from './app/contexts/TransactionsContext';
import { GlobalStyle } from './ui/styles/global';
import { theme } from './ui/styles/theme';

Modal.setAppElement('#root');

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Routes />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
