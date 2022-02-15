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
  green: '#249157',
  red: '#D12A46'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.25rem;
    background: ${(props) => props.isActive 
      ? transparentize(0.8, colors[props.activeColor])
      : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;

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
