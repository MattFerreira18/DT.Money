import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > label {
    color: ${({ theme }) => theme.colors['text-body']};
  }

  .switch {
    width: 52px;
    height: 28px;

    position: relative;
    display: inline-block;
  }

  .switch input {
    width: 0;
    height: 0;
    
    opacity: 0;

    &:checked + .slider {
      background: ${({ theme }) => theme.colors.green};
    }

    &:focus + .slider {
      box-shadow: 0 0 1px ${({ theme }) => theme.colors.green};
    }

    &:checked + .slider:before {
      transform: translateX(24px);
    }
  }

  .slider {
    background: ${({ theme }) => theme.colors['blue-light']};
    border-radius: 28px;
    
    position: absolute;
    inset: 0;
    
    cursor: pointer;
    transition: .4s;

    &:before {
      height: 20px;
      width: 20px;
      
      background: #fff;
      
      position: absolute;
      bottom: 4px;
      left: 4px;
      
      content: '';
      border-radius: 50%;
      transition: .4s;
    }
  }
`;
