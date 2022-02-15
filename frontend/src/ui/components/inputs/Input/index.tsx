import { InputHTMLAttributes } from 'react';

import { Container } from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: any;
  onChange: (e: any) => void;
}

export function Input({ onChange, placeholder, value, ...props }: InputProps) {
  return (
    <Container 
    placeholder={ placeholder }
    onChange={ onChange }
    value={ value }  
    { ...props }
  />
  );
}
