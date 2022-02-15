import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;

  @media(max-width: 480px) {
    overflow-x: auto;
    height: 13.5rem;
  }

  div {
    padding: 1.5rem;
    
    background: ${({theme}) => theme.colors.shape};
    color: ${({theme}) => theme.colors["text-title"]};

    border-radius: 0.25rem;

  @media(max-width: 480px) {
    width: 20rem;
  }

    &.highlight-background.positive {
      background: ${({theme}) => theme.colors.green};
      color: #fff;
    }

    &.highlight-background.negative {
      background: ${({theme}) => theme.colors.red};
      color: #fff;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;

      margin-top: 1rem;
      
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

      @media(max-width: 480px) {
        margin-top: 3.5rem;
      }
    }
  }
`;
