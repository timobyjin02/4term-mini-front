import React from "react";
import { Link } from "react-router-dom";
import {
  LoginBox,
  LoginContainer,
  ImgLogo,
} from "../../styles/User/LoginPageStyle";
import LoginInputText from "./Input";
import  LoginBtn  from "./Button";
import KakaoLogin from "./KakaoLogin";

function LoginBody() {

  return (
    <LoginBox>
      <LoginContainer>
        <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <LoginInputText placeholder='전화번호, 사용자 이름 또는 이메일' />
          <LoginInputText type='password' placeholder='비밀번호' />
          <Link to="/main">
            <LoginBtn type="submit">로그인</LoginBtn>
          </Link>
          <KakaoLogin />
        </LoginContainer>
      </LoginBox>
  );
}

export default LoginBody;