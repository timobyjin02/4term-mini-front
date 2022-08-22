import React from "react";
import Join from "../components/User/SignUp";
import LoginFooter from "../components/User/LoginFooter";
import { Login } from "../styles/User/LoginPageStyle";

function SignUp() {
  return (
    <Login>
      <Join>
        <SignUp />
        <LoginFooter />
      </Join>
    </Login>
  );
}

export default SignUp;
