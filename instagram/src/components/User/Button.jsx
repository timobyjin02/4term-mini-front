import React, { children } from 'react';
import { LoginBtn } from "../../styles/User/Button";

function Button({children, ...props}) {
  return (
    <LoginBtn {...props}>{children}</LoginBtn>
  )
}

export default Button;

