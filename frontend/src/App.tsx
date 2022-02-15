import React from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { Routes } from './app/routes';
import { TransactionsProvider } from './app/contexts/TransactionsContext';
import { AuthProvider } from './app/contexts/AuthContext';
import { GlobalStyle } from './ui/styles/global';
import { darkTheme, lightTheme } from './ui/styles/theme';
import { Layout } from './ui/Layout';
import { useTheme } from './app/hooks/useTheme';

Modal.setAppElement('#root');

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
