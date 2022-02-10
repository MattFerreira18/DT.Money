
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../../assets/logo.svg';


export function Logo() {
  const navigate = useNavigate();

  function handleToDashboardPage() {
    navigate('/dashboard');
  }

  return (
    <Container onClick={() => handleToDashboardPage()}>
      <img src={logoImg} alt="dt.money" />
    </Container>
  );
}

