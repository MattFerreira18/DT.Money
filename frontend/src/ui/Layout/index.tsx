
import React from 'react';

import { Header } from '../components/Header';

import { Container } from './styles';

type LayoutProps = {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

