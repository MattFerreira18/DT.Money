import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.blue};
`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

export const NewTransactionButton = styled.button`
  height: 3rem;
    
  padding: 0 2rem;
    
  font-size: 1rem;
  color: #fff;
    
  background: ${({ theme }) => theme.colors['blue-light']};
    
  margin-right: 1rem;
  border-radius: 0.25rem;

  &:hover {
    filter: brightness(0.9);
  }

  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const UserWrapper = styled.button`
  height: 3.4rem;
  width: 3.4rem;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors['blue-light']};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  color: #fff;
  
  &:hover {
    filter: brightness(0.9);
  }
`;
