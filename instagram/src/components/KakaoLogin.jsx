// import React,{useEffect} from 'react';
// import axios from 'axios';
import styled from "@emotion/styled";

function KakaoLogin() {
    // const jsKey = "c45d6f34c0b90c11bf04e0fd4e4ce43c";
    // window.Kakao.init(jsKey);

    // useEffect(() => {
    //   axios.post('http://54.180.119.161:8080/moae/user/register', { 
    //     profile_nickname: '',
    //     account_email: '',
    //     gender: '',
    //   })
    //   .then((response) => {
    //     console.log('dfdfdf');
    //   })
    //   .catch((error) => {
    //     console.log('error:', error.response);
    //   });
    // })

    const handleLogin = () => {
        // window.Kakao.Auth.login({
        //     scope: "profile_nickname, account_email, gender",
        //     success: function (authObj) {
        //       window.Kakao.API.request({
        //         url: "/v2/user/me",
        //         success: (res) => {
        //           const kakao_account = res.kakao_account;
        //           console.log(kakao_account);
        //         },
        //       });
        //     },
        //   });
        }

    return (
        <ImgBtn src="img/kakaoBtn.png" onClick={handleLogin} alt="kakaoBtn" />
    )
};

export default KakaoLogin;


const ImgBtn = styled.img`
  margin-top: 10px;
  width: 100px;
  cursor: pointer;
`;