import React from 'react';
import { SubmitButton } from '../../components/buttons';
import { Input } from '../../components/Input';

import { Container } from './styles';

export function SignUp() {
  return (
    <Container>
      <form>
        <h2>Criar conta</h2>
        <Input onChange={() => console.log('value')} placeholder="Nome" value="" />
        <Input onChange={() => console.log('value')} placeholder="Email" value="" />
        <Input onChange={() => console.log('value')} placeholder="Senha" value="" />
        <Input onChange={() => console.log('value')} placeholder="Confirma a senha" value="" />

        <SubmitButton title='Criar agora' />
      </form>
    </Container>
  );
}
