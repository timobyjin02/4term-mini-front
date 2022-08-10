import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import {
  LoginBox,
  LoginContainer,
  ImgLogo,
  LoginBtn,
} from "../styles/LoginPage_Style";
import KakaoLogin from "./KakaoLogin";

function LoginBody() {

  return (
    <LoginBox>
      <LoginContainer>
        <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <Input />
          <Link to="/main">
            <LoginBtn>로그인</LoginBtn>
          </Link>
          <KakaoLogin />
        </LoginContainer>
      </LoginBox>

  );
}

export default LoginBody;
