import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../../app/services/api';
import { LinkButton, SubmitButton } from '../../components/buttons';
import { Input } from '../../components/inputs';

import { Container } from './styles';

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({} as CreateUserData);

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (data.password !== data.passwordConfirmation) {
      return;
    }

    const { passwordConfirmation,...dataToSubmit } = data;

    const response = await api.post('/users', dataToSubmit);

    if (response.status === 201) {
      navigate('/signin');
    }
  }

  return (
    <Container>
      <form onSubmit={(e) => handleCreateUser(e)}>
        <h2>Criar conta</h2>
        <Input 
          onChange={(e) => setData({...data, name: e.target.value})} 
          placeholder="Nome" 
          value={data.name} 
        />
        <Input 
          onChange={(e) => setData({...data, email: e.target.value})} 
          placeholder="Email" type="email" 
          value={data.email}
        />
        <Input 
          onChange={(e) => setData({...data, password: e.target.value})} 
          placeholder="Senha" type="password" 
          value={data.password}
        />
        <Input 
          onChange={(e) => setData({...data, passwordConfirmation: e.target.value})} 
          placeholder="Confirme a senha" type="password" 
          value={data.passwordConfirmation}
        />

        <SubmitButton title='Criar agora' />

        <LinkButton title="Já possui conta?" link="/signin" /> 
      </form>
    </Container>
  );
}
