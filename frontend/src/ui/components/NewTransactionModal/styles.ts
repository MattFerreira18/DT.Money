import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: ${({theme}) => theme.colors["text-title"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`; 


export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive 
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${({theme}) => theme.colors["text-title"]};
    }

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
`;
