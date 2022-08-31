import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Login } from "../styles/User/LoginPageStyle";
import LoginBody from "../components/User/LoginBody";
import LoginFooter from "../components/User/LoginFooter";
import axios, { setHeader, removeHeader } from "../api/config";
import {decodingToken} from '../utils/getToken';

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = decodingToken?decodingToken() :null;
  // console.log(userInfo.userNo);

  async function getProperty(isCurrentRootPath) {
    try {
      const response = await axios.get(`/user/profile/${userInfo.userNo}`);
      if (isCurrentRootPath) {
        navigate("/main");
      }
    } catch (err) {
      console.log("로그인 정보가 만료되었습니다");
      navigate("/");
      localStorage.removeItem("jwtToken");
      removeHeader();
    }
  }

  useEffect(function () {
    const token = localStorage.getItem("jwtToken");
    const isCurrentRootPath = location.pathname === "/";

    if (!token) {
      if (!isCurrentRootPath) {
        navigate("/");
      }
    } else {
      setHeader(token); // token이 있을 때, axios 사용할 때마다 자동으로 헤더에 Authorization 적용될 수 있도록
      getProperty(isCurrentRootPath);
    }
  }, []);

  return (
    <Login>
      <LoginBody />
      <LoginFooter />
    </Login>
  );
}

export default LoginPage;
