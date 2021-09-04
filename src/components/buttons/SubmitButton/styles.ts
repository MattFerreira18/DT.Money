import styled from "styled-components";

export const Container = styled.button`
    /* button[type="submit"] { */
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: 200ms;

    &:hover {
      filter: brightness(0.9)
    }
  /* } */
`;
