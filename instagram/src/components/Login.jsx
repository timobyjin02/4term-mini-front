import styled from "@emotion/styled";
import React from 'react';
import Input from "./Input";
import LoginFooter from "./LoginFooter";
import { Link } from 'react-router-dom';

function Login() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("click");
  // }
  return (
    <DivLogin>
    <DivLoginBox>
        <DivLoginContainer>
            <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
            <Input />
            <Link to="/Navigation"><LoginBtn>로그인</LoginBtn></Link>
        </DivLoginContainer>
    </DivLoginBox>
    <LoginFooter />
    </DivLogin>
  )
}

export default Login;

const DivLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const DivLoginBox = styled.div`
  width: 350px;
  height: 396px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey };
`
const DivLoginContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ImgLogo = styled.img`
  position: absolute;
  top: 47px;
  margin-top: 10px;
  width: 175px;
  // height: 100%;
`
const LoginBtn = styled.button`
  width: 268px;
  height: 30px;
  margin-top: 6px;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.btn };
  color: ${({ theme }) => theme.palette.backgroundWhite };
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`