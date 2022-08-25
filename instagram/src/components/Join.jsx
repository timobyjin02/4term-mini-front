import styled from "@emotion/styled";
import React from 'react'
import LoginFooter from "./LoginFooter";

function Join() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("click");
  }
  return (
    <DivLogin>
    <DivLoginBox>
        <DivLoginContainer>
            <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
            <DivText>친구들의 사진과 동영상을 보려면 가입하세요.</DivText>
            <InputText placeholder='휴대폰 번호 또는 이메일 주소'/>
            <InputText placeholder='성명'/>
            <InputText placeholder='사용자 이름'/>
            <InputText placeholder='비밀번호'/>
            <form onSubmit={handleSubmit}>
            <LoginBtn type="submit">가입</LoginBtn>
            </form>
        </DivLoginContainer>
    </DivLoginBox>
    <LoginFooter />
    </DivLogin>
  )
}

export default Join;

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
  top: 50px;
  width: 175px;
`
const DivText = styled.div`
  width: 304px;
  height: 58px;
  margin-top: 100px;
  font-weight: 700;
  font-size: 15px;
  color: #DADADA;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InputText = styled.input`
  box-sizing: border-box; // index.css에
  width: 268px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey };
  border-radius: 4px;
  outline: none;
  margin-bottom: 5px;
  padding: 11px 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
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
