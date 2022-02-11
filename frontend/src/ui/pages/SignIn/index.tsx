import React, { FormEvent, useState } from 'react';

import { useAuth } from '../../../app/hooks/useAuth';
import { LinkButton, SubmitButton } from '../../components/buttons';
import { Input } from '../../components/Input';

import { Container } from './styles';

interface SignInData {
  email: string;
  password: string;
}

export function SignIn() {
  const [signInData, setSignInData] = useState({} as SignInData);
  const { signIn } = useAuth();

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await signIn(signInData.email, signInData.password);
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSignIn(e)}>
        <h2>Login</h2>
        <Input
          onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
          placeholder="Email" 
          type="email" 
          value={signInData.email}
        />

        <Input
          onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
          placeholder="Senha" 
          type="password"
          value={signInData.password}
        />

        <SubmitButton title='Entrar' />

        <LinkButton title="Ainda não possui conta?" link="/signup" />
      </form>
    </Container>
  );
}
