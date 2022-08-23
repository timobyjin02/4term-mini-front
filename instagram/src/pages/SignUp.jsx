import React from "react";
import Join from "../components/Join";
import LoginFooter from "../components/LoginFooter";
import { Login } from "../styles/LoginPage_style";

function SignUp() {
  return (
    <Login>
      <Join />
      <LoginFooter />
    </Login>
  );
}

export default SignUp;
