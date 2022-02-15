import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.6rem;

  display: flex;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;

    &:hover {
      filter: opacity(0.8);
    }
  }
`; 
