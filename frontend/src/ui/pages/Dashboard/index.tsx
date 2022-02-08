import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Dashboard } from '../../components/Dashboard';
import { NewTransactionModal } from '../../components/NewTransactionModal';

export function DashboardPage() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);

  return (
    <>
      <Header
        onOpenNewTransactionModal={() => setNewTransactionModalIsOpen(true)}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={() => setNewTransactionModalIsOpen(false)}
      />
    </>
  );
}
