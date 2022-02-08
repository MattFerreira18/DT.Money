import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // responsive font
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, 
  h2,
  h3, 
  h4, 
  h5, 
  h6, 
  strong {
    font-weight: 600;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    width: 100%;
    max-width: 576px;

    padding: 3rem;
    
    background: ${({ theme }) => theme.colors.background};
    border-radius: 0.25rem;
    
    position: relative;

    @media(max-width:480px) {
      height: 100%;
      border: 0;
    }
  }

  .modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;
    
    transition: 200ms;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
