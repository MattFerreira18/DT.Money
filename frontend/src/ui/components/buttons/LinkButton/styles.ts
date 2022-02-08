import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.6rem;

  display: flex;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      filter: opacity(0.8);
    }
  }
`; 
