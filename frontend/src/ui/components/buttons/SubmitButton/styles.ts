import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${({ theme }) => theme.colors.green};
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    &:hover {
      filter: brightness(0.9)
    }
`;
