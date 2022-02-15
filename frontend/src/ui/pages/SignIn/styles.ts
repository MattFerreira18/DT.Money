import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: -4rem;

  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    height: calc(100vh - 13rem);
  }

  form {
    max-width: 576px;
    
    padding: 3rem;
    
    background: ${({ theme }) => theme.colors.shape};
    border-radius: 0.25rem;

    h2 {
      color: ${({ theme }) => theme.colors["text-title"]};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      height: 100%;

      padding-top: 5rem;

      border-radius: 0;
    }
  }
`;
