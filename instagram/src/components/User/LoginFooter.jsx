import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../styles/User/LoginFooterStyle";

function LoginFooter() {
  
  return (
    <Footer>
      계정이 없으신가요?<Link to="/signup">가입하기</Link>
    </Footer>
  );
}

export default LoginFooter;
