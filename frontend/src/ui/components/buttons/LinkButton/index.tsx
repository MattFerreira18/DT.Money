import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type LinkButtonProps = {
  title: string;
  link: string;
}

export function LinkButton({ title, link }: LinkButtonProps) {
  return (
    <Link to={link}>
      <Container>
      <span>{title}</span>
    </Container>
    </Link>
  );
}
