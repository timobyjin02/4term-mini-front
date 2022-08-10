import React from "react";
import { Login } from "../styles/LoginPage_style";
import LoginBody from "../components/LoginBody";
import LoginFooter from "../components/LoginFooter";

function LoginPage() {
  return (
    <Login>
      <LoginBody />
      <LoginFooter />
    </Login>
  );
}

export default LoginPage;
