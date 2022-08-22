import React, { children } from 'react';
import styled from '@emotion/styled';

function Button({chikdren, ...props}) {
  return (
    <LoginBtn {...props}>{children}</LoginBtn>
  )
}

export default Button;

export const LoginBtn = styled.button`
  width: 268px;
  height: 30px;
  margin-top: 6px;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.btn};
  color: ${({ theme }) => theme.palette.backgroundWhite};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;
