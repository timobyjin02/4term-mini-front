import React from "react";
import Join from "../components/Loginpage/SignUp";
import LoginFooter from "../components/Loginpage/LoginFooter";
import { Login } from "../styles/Loginpage/LoginPageStyle";

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
