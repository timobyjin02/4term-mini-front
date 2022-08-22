import axios from 'axios';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

function KakaoLogin() {
    const navigate = useNavigate();

    const jsKey = "c45d6f34c0b90c11bf04e0fd4e4ce43c";
    window.Kakao.init(jsKey);

    function setAuthorizationToken(token) {
      if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common['Authorization'];
      }
    } 

    const kakaoLoginSuccess = async(account_email, profile) => {
      try {
        const {data} = await axios.post('http://15.164.232.205:8080/moae/user/login', { 
          profile_nickname: profile.nickname,
          account_email,
        }).then(res => {
          const token = res.data.token; // 응답 데이터 토큰에서 토 큰 얻기
          localStorage.setItem('jwtToken', token); // 로컬스토리지에 저장
          setAuthorizationToken(token);
          console.log(res);
          // 수정 봐야함 (토큰 형태 확인 필수 !!!)
          // const userNo = res.data.token;
          // localStorage.setItem('jwtToken', token);
        })
        console.log(data);
         // data에는 token 값이 포함되어 있어야 한다
         // 토큰을 localstorage에 저장한다
         // 네비게이트를 통해 리다이렉트 해준다
         // setAuthorizationToken(localStorage.jwtToken); // reload시에도 저장될 수 있도록 header에 계속 남음
      } catch (err) {
        console.log(err)
      }
    }

    const handleLogin = () => {
        window.Kakao.Auth.login({
            scope: "profile_nickname, account_email",
            success: function (authObj) {
              window.Kakao.API.request({
                url: "/v2/user/me",
                success: (res) => {
                  const kakao_account = res.kakao_account;
                  const {email, profile} = kakao_account
                  kakaoLoginSuccess(email, profile)
                },
              });
            },
        });
        navigate('/signup', {
        });
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