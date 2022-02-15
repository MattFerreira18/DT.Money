import styled from "styled-components";

export const Container = styled.button`
    height: 4rem;
    width: 100%;
    
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    
    background: ${({ theme }) => theme.colors.green};
    border-radius: 0.25rem;
    
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    

    &:hover {
      filter: brightness(0.9)
    }
`;
