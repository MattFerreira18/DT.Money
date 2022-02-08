import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  background: #e7e9ee;
  border: 1px solid #d7d7d7;
  font-weight: 400;
  font-size: 1rem;

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
