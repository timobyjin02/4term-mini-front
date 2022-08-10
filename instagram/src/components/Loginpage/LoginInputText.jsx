import { InputBox, InputText } from "../../styles/Loginpage/LoginInputTextStyle";
import React from "react";

function LoginInputText() {
  return (
    <InputBox>
      <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
      <InputText placeholder="비밀번호" />
    </InputBox>
  );
}

export default LoginInputText;
