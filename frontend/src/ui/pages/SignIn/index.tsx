import React from 'react';

import { LinkButton, SubmitButton } from '../../components/buttons';
import { Input } from '../../components/Input';

import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <form>
        <h2>Login</h2>
        <Input onChange={() => console.log('value')} placeholder="Email" type="email" value="" />
        <Input onChange={() => console.log('value')} placeholder="Senha" type="password" value="" />

        <SubmitButton title='Entrar' />

        <LinkButton title="Ainda não possui conta?" link="/signup" /> 
      </form>
    </Container>
  );
}
