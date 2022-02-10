import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;

  margin: -4rem auto 0;
  z-index: 20;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;

    padding: 0 1rem;
    margin-bottom: 5rem;

    border-radius: 0;
  }
`;

export const Statistic = styled.div`
  background: #fff;

  padding: 3rem;

  border-radius: 0.25rem;
  box-shadow: 0px 6px 20px 6px rgba(150, 156, 179, 0.2);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:first-child {
    grid-row: 1;
  }

  &:nth-child(2) {
    grid-row: 2;
  }

  &:last-child {
    grid-row: 3;
  }

  h5 {
    color: ${({ theme }) => theme.colors['text-title']};
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors['text-body']};
  }

  strong.deposits {
    color: ${({ theme }) => theme.colors.green};
  }

  strong.withdraws {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const EditProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  form {
    padding: 3rem;
    
    background: #fff;
    box-shadow: 0px 6px 20px 6px rgba(150, 156, 179, 0.2);

    border-radius: 0.25rem;

    h2 {
      color: ${({ theme }) => theme.colors["text-title"]};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;


