import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    color: ${({theme}) => theme.colors["text-title"]};
    font-size: 1.5rem;
    
    margin-bottom: 2rem;
  }
`;
