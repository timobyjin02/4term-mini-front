import {
  LoginBox,
  LoginContainer,
  ImgLogo,
  Text,
  InputText,
  LoginBtn,
} from "../../styles/Loginpage/SignUpStyle";
import React from "react";

function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("click");
  }
  return (
      <LoginBox>
        <LoginContainer>
          <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <Text>친구들의 사진과 동영상을 보려면 가입하세요.</Text>
          <InputText placeholder="휴대폰 번호 또는 이메일 주소" />
          <InputText placeholder="성명" />
          <InputText placeholder="사용자 이름" />
          <InputText placeholder="비밀번호" />
          <form onSubmit={handleSubmit}>
            <LoginBtn type="submit">가입</LoginBtn>
          </form>
        </LoginContainer>
      </LoginBox>
  );
}

export default SignUp;
