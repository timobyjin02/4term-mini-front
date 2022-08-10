import React from "react";
import { Link } from "react-router-dom";
import {
  LoginBox,
  LoginContainer,
  ImgLogo,
  LoginBtn,
} from "../../styles/Loginpage/LoginPageStyle";
import KakaoLogin from "./KakaoLogin";
import LoginInputText from "./LoginInputText";

function LoginBody() {

  return (
    <LoginBox>
      <LoginContainer>
        <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <LoginInputText />
          <Link to="/main">
            <LoginBtn>로그인</LoginBtn>
          </Link>
          <KakaoLogin />
        </LoginContainer>
      </LoginBox>

  );
}

export default LoginBody;
