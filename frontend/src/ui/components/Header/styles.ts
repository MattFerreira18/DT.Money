import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.colors.blue};
`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    @media(max-width:480px) {
      transform: scale(0.9, 0.9);
    }
  }

  button {
    height: 3rem;
    
    padding: 0 2rem;
    
    font-size: 1rem;
    color: #fff;
    
    background: ${({theme}) => theme.colors['blue-light']};
    
    border: 0;
    border-radius: 0.25rem;
    
    transition: 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

