import React from "react";
import axios from 'axios';
import {
  LoginBox,
  LoginContainer,
  ImgLogo,
  Text,
} from "../../styles/User/SignUpStyle";
import LoginInputText from "./Input";
import { LoginBtn } from "./Button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [userInputValue, setUserInputValue] = useState({
    email: '',
    name: '',
    nickname: '',
  })

  // console.log(userInputValue);

  const [data, setData] = useState({});
  
  const onSubmit =(e) => {
    e.preventDefault();
    const {account_email,name, nickname } = data

    // console.log(data);
    console.log(e.target.account_email);
    if (!e.target.account_email.value) {
      alert("이메일을 입력하세요")
      e.target.account_email.focus()
      return
    }
    if (!e.target.nickname.value) {
      alert("사용자 이름을 입력하세요")
      e.target.nickname.focus()
      return
    }
    if (!e.target.name.value) {
      alert("이름을 입력하세요")
      e.target.name.focus()
      return
    }

    handleSignup(account_email, {nickname}, name)
  }

  const onChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const inputHandleOnChange = (e,key) => {
    setUserInputValue({...userInputValue, [key]:e.target.value})
  }

  const handleSignup = async(account_email, profile, name) => {
    try {
      const {data} = await axios.post('http://15.164.232.205:8080/moae/user/profile/:userNo', { 
        profile_nickname: profile.nickname,
        account_email,
        name,
      }).then(res => {
        console.log(res);
        })
    } catch (err) {
      console.log(err)
    }
      // navigate('/main', {});
    }

  return (
      <LoginBox>
        <LoginContainer>
          <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <Text>친구들의 사진과 동영상을 보려면 가입하세요.</Text>
          <form onSubmit={e => onSubmit(e)}>
              <LoginInputText value={userInputValue.email} type='email' name="account_email" placeholder='휴대폰 번호 또는 이메일 주소' onChange={e => inputHandleOnChange(e, 'email')} />
              <LoginInputText value={userInputValue.nickname} name="nickname" placeholder='성명' onChange={e => inputHandleOnChange(e, 'nickname')}/>
              <LoginInputText value={userInputValue.name} name="name" placeholder='사용자 이름'  onChange={e => inputHandleOnChange(e, 'name')}/>
              <LoginBtn type="submit">가입</LoginBtn>
          </form>
        </LoginContainer>
      </LoginBox>
  );
}

export default SignUp;