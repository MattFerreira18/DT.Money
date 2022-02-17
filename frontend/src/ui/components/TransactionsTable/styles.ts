import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th {
      color: ${({theme}) => theme.colors["text-body"]};
      font-weight: 400;
      text-align: left;

      padding: 1rem 2rem;

      @media(min-width: 480px) {
        &:last-child {
          display: none;
         }

        }
        
        @media(max-width:480px) {
          &:not(:last-child) {
            display: none;
          }
          
        padding-left: 0;
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors["text-title"]};
      }
    }

    tbody tr {
      &:hover {
        filter: opacity(0.8);
      }

      @media(max-width:480px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
        gap: 0;
        margin-bottom: 0.6rem;
      }

      td {
        padding: 1rem 2rem;
        border: 0;
        background: ${({theme}) => theme.colors.shape};
        color: ${({theme}) => theme.colors["text-body"]};
        
        &:first-child {
          border-radius: 0.25rem 0 0 0.25rem;
        }

        &:last-child {
          border-radius: 0 0.25rem 0.25rem 0;
        }
 
        @media(max-width: 480px) {
          &:first-child,
          &:nth-child(2) {
            grid-column-start: 1;
            grid-column-end: 4;
          }

          &:first-child {
            font-size: 1.2rem;
          }

          &:nth-child(2) { 
            font-size: 1.4rem;
          }

          &:nth-child(3) { 
            text-align: start;
          }

          &:nth-child(4) { 
            text-align: end;
          }
        }

        &:first-child {
          color: ${({theme}) => theme.colors["text-title"]};
        }

        &.deposit {
          color: ${({theme}) => theme.colors.green};
        }

        &.withdraw {
          color: ${({theme}) => theme.colors.red};
        }
      }
    }
  }
`;
