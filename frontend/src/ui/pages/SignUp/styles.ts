import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: -4rem;

  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    max-width: 576px;
    
    padding: 3rem;
    
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 6px 20px 6px rgba(150, 156, 179, 0.2);

    border-radius: 0.25rem;

    h2 {
      color: ${({ theme }) => theme.colors["text-title"]};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;
