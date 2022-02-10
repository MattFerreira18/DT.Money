import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { Routes } from './app/routes';
import { TransactionsProvider } from './app/contexts/TransactionsContext';
import { AuthProvider } from './app/contexts/AuthContext';
import { GlobalStyle } from './ui/styles/global';
import { theme } from './ui/styles/theme';
import { Layout } from './ui/Layout';

Modal.setAppElement('#root');

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TransactionsProvider>

          <Layout>
            <Routes />
          </Layout>

          <GlobalStyle />
        </TransactionsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
