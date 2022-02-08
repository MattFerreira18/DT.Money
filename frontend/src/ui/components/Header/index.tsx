import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { NewTransactionModal } from '../NewTransactionModal';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);
  const [showNewTransactionButton, setShowNewTransactionButton] = useState(false);
  const router = useLocation();

  
  useEffect(() => {
    const isDashboardPage = router.pathname.endsWith('dashboard');

    setShowNewTransactionButton(isDashboardPage);
  }, [router.pathname]);

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="dt.money" />
          {
            showNewTransactionButton && (
              <button
                type="button"
                onClick={() => setNewTransactionModalIsOpen(true)}
              >
                Nova Transação
              </button>
            )
          }
        </Content>
      </Container>

      <NewTransactionModal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={() => setNewTransactionModalIsOpen(false)}
      />
    </>
  )
}
