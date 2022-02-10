import styled from 'styled-components';

export const Container = styled.button`
  background: none;

  img {
    @media(max-width:480px) {
      transform: scale(0.9, 0.9);
    }
  }
`;
