import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type SwitchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  isChecked?: boolean;
}

export function SwitchInput({ 
  title, 
  isChecked = false, 
  ...props
}: SwitchInputProps) {
  return (
    <Container>
      <label htmlFor={title}>{title}</label>
      <label
        htmlFor={title}
        className="switch"
      >
        <input id={title} type="checkbox" checked={isChecked} {...props} />
        <span className="slider" />
      </label>
    </Container>
  );
}
