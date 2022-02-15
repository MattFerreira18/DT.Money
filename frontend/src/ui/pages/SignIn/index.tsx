import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../app/hooks/useAuth';
import { LinkButton, SubmitButton } from '../../components/buttons';
import { Input } from '../../components/inputs';
import { MessageModal } from '../../components/MessageModal';

import { Container } from './styles';

interface SignInData {
  email: string;
  password: string;
}

export function SignIn() {
  const navigate = useNavigate();
  const { signIn, isAuthenticated } = useAuth();
  const [signInData, setSignInData] = useState({} as SignInData);
  const [messageModalIsOpen, setMessageModalIsOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    const error = await signIn(signInData.email, signInData.password);

    if (error) {
      setMessageModalIsOpen(true);
    }

    setSignInData({ email: '', password: '' });
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSignIn(e)}>
        <h2>Login</h2>
        <Input
          onChange={(e) => setSignInData({ 
            ...signInData, 
            email: e.target.value, 
          })}
          placeholder="Email" 
          type="email" 
          value={signInData.email}
        />

        <Input
          onChange={(e) => setSignInData({ 
            ...signInData, 
            password: e.target.value,
          })}
          placeholder="Senha" 
          type="password"
          value={signInData.password}
        />

        <SubmitButton title='Entrar' />

        <LinkButton title="Ainda não possui conta?" link="/signup" />
      </form>

      <MessageModal 
        title='Erro' 
        message='parece que você digitou o seu usuário ou senha de maneira incorreta. Tente novamente.' 
        isOpen={messageModalIsOpen} 
        onRequestClose={() => setMessageModalIsOpen(false)} 
      />
    </Container>
  );
}
