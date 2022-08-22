import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import {
  LoginBox,
  LoginContainer,
  ImgLogo,
} from "../../styles/User/LoginPageStyle";
import { LoginBtn } from "./Button";
import KakaoLogin from "./KakaoLogin";

function LoginBody() {

  return (
    <LoginBox>
      <LoginContainer>
        <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <LoginInputText type={'text'} placeholder={'전화번호, 사용자 이름 또는 이메일'} />
          <LoginInputText type={'password'} placeholder={'비밀번호'} />
          <Link to="/main">
            <LoginBtn type="submit">로그인</LoginBtn>
          </Link>
          <KakaoLogin />
        </LoginContainer>
      </LoginBox>
  );
}

export default LoginBody;

const LoginInputText = styled.input`
  box-sizing: border-box;
  width: 268px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  outline: none;
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 11px 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
