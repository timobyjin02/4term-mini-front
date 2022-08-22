import React from "react";
import axios from 'axios';
import {
  LoginBox,
  LoginContainer,
  ImgLogo,
  Text,
  InputText,
  FormContainer,
} from "../../styles/User/SignUpStyle";
import { LoginBtn } from "./Button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({

  });
  
  const onSubmit =(e) => {
    e.preventDefault();
    console.log(data)
    const {nickname, account_email, name} = data
    handleSignup(account_email, {nickname}, name)
  }

  const onChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSignup = async(account_email, profile, name) => {
    try {
      const {data} = await axios.post('http://15.164.232.205:8080/moae/user/profile/:userNo', { 
        profile_nickname: profile.nickname,
        account_email,
        name,
      }).then(res => {
        console.log('전송 완료')
        console.log(res);
        })
          console.log(data);
    } catch (err) {
        console.log(err)
    }
      navigate('/main', {});
    }
    console.log("click");

  return (
      <LoginBox>
        <LoginContainer>
          <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <Text>친구들의 사진과 동영상을 보려면 가입하세요.</Text>
          <FormContainer>
            <InputText type={'email'} name="account_email" placeholder={'휴대폰 번호 또는 이메일 주소'} onChange={onChange} />
            <InputText type={'text'} name="nickname" placeholder={'성명'} onChange={onChange}/>
            <InputText type={'text'} name="name" placeholder={'사용자 이름'}  onChange={onChange}/>
            <InputText type={'password'} placeholder={'비밀번호'} />
            <LoginBtn onClick={onSubmit} type="submit">가입</LoginBtn>
          </FormContainer>
        </LoginContainer>
      </LoginBox>
  );
}

export default SignUp;