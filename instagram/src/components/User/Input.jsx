import React from 'react';
import { LoginInputText } from "../../styles/User/Input";

function Input({...props}) {

  return (
    <>
      <LoginInputText {...props}></LoginInputText>
    </>
  )
}

export default Input;

