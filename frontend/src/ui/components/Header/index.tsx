import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

import { NewTransactionModal } from '../NewTransactionModal';
import { Logo } from './Logo';

import { Container, Content, NewTransactionButton, UserWrapper } from './styles';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);
  const [showNewTransactionButton, setShowNewTransactionButton] = useState(false);

  useEffect(() => {
    const isDashboardPage = location.pathname.endsWith('dashboard');

    setShowNewTransactionButton(isDashboardPage);
  }, [location.pathname]);

  function handleGotoProfile() {
    navigate('/me');
  }

  return (
    <>
      <Container>
        <Content>
          <Logo />
          <div>
            {
              showNewTransactionButton && (
                <NewTransactionButton
                  onClick={() => setNewTransactionModalIsOpen(true)}
                >
                  Nova Transação
                </NewTransactionButton>
              )
            }
            <UserWrapper onClick={() => handleGotoProfile()}>
              <AiOutlineUser />
            </UserWrapper>
          </div>
        </Content>
      </Container>

      <NewTransactionModal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={() => setNewTransactionModalIsOpen(false)}
      />
    </>
  )
}
