import React from "react";
import { Login } from "../styles/Loginpage/LoginPageStyle";
import LoginBody from "../components/Loginpage/LoginBody";
import LoginFooter from "../components/Loginpage/LoginFooter";

function LoginPage() {
  return (
    <Login>
      <LoginBody />
      <LoginFooter />
    </Login>
  );
}

export default LoginPage;
