import React from "react";
import Input from "./Input";
import LoginFooter from "./LoginFooter";
import { Link } from "react-router-dom";
import {
  Login,
  LoginBox,
  LoginContainer,
  ImgLogo,
  LoginBtn,
} from "../styles/LoginPage_Style";

function LoginPage() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("click");
  // }
  return (
    <Login>
      <LoginBox>
        <LoginContainer>
          <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <Input />
          <Link to="/Navigation">
            <LoginBtn>로그인</LoginBtn>
          </Link>
        </LoginContainer>
      </LoginBox>
      <LoginFooter />
    </Login>
  );
}

export default LoginPage;
