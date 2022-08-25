import React from "react";
import { Login } from "../styles/User/LoginPageStyle";
import LoginBody from "../components/User/LoginBody";
import LoginFooter from "../components/User/LoginFooter";

function LoginPage() {
  return (
    <Login>
      <LoginBody />
      <LoginFooter />
    </Login>
  );
}

export default LoginPage;
