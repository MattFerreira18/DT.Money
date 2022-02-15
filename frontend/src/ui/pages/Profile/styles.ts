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


  h2 {
    color: ${({ theme }) => theme.colors["text-title"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const Statistic = styled.div`
  background: ${({ theme }) => theme.colors.shape};

  padding: 3rem;

  border-radius: 0.25rem;
  box-shadow: 0px 6px 20px 6px rgba(0, 0, 0, 0.2);

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

export const EditProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  form {
    padding: 3rem;
    
    background: ${({ theme }) => theme.colors.shape};;
    box-shadow: 0px 6px 20px 6px rgba(0, 0, 0, 0.2);

    border-radius: 0.25rem;
  }
`;

export const SettingsSection = styled.section`
  background: ${({ theme }) => theme.colors.shape};;

  grid-column-start: 1;
  grid-column-end: 3;
  padding: 3rem;

  border-radius: 0.25rem;
  box-shadow: 0px 6px 20px 6px rgba(0, 0, 0, 0.2);
`;
