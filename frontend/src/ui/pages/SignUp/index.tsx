import React from 'react';

import { LinkButton, SubmitButton } from '../../components/buttons';
import { Input } from '../../components/Input';

import { Container } from './styles';

export function SignUp() {
  return (
    <Container>
      <form>
        <h2>Criar conta</h2>
        <Input onChange={() => console.log('value')} placeholder="Nome" value="" />
        <Input onChange={() => console.log('value')} placeholder="Email" type="email" value="" />
        <Input onChange={() => console.log('value')} placeholder="Senha" type="password" value="" />
        <Input onChange={() => console.log('value')} placeholder="Confirme a senha" type="password" value="" />

        <SubmitButton title='Criar agora' />

        <LinkButton title="Já possui conta?" link="/signin" /> 
      </form>
    </Container>
  );
}
