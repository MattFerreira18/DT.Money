import styled from "styled-components";

export const Container = styled.input`
  height: 4rem;
  width: 100%;

  padding: 0 1.5rem;
  
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors["shape-alternative"]};
  
  font-weight: 400;
  font-size: 1rem;
  color: ${({theme}) => theme.colors["text-title"]};;

  &::placeholder {
    color: ${({theme}) => theme.colors["text-body"]};
  }

  &:focus{ 
    border: 1px solid ${({theme}) => theme.colors["blue-light"]};
    outline: none;
  }

  & + input {
    margin-top: 1rem;
  }
`;
