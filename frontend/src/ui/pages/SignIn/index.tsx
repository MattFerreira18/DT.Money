import React from 'react';

import { LinkButton, SubmitButton } from '../../components/buttons';
import { Input } from '../../components/Input';

import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <form>
        <h2>Login</h2>
        <Input onChange={() => console.log('value')} placeholder="Email" value="" />
        <Input onChange={() => console.log('value')} placeholder="Senha" value="" />

        <SubmitButton title='Entrar' />

        <LinkButton title="Ainda não possui conta?" link="/signup" /> 
      </form>
    </Container>
  );
}
