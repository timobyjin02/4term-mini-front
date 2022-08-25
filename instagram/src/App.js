import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { injectGlobal } from "@emotion/css";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import Explore from "./pages/Explore";
import UserPage from "./pages/UserPage";
import axios, { setHeader, removeHeader } from "./api/config";
import { useRecoilState } from "recoil";
import { userNo } from "./store/user";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userNo);

  async function getProperty(isCurrentRootPath) {
    try {
      const response = await axios.get("/user/profile/:userNo");
      setUser(response.data.userNo);
      if (isCurrentRootPath) {
        navigate("/main");
      }
    } catch (err) {
      console.log("로그인 정보가 만료되었습니다");
      navigate("/");
      localStorage.removeItem("token");
      removeHeader();
    }
  }

  useEffect(function () {
    const token = localStorage.getItem("token");
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
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/username" element={<UserPage />}></Route>
    </Routes>
  );
}

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box; 
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  } 
  ul {
    list-style: none;
  }
  li {
    list-style:none;
  }
  a, a:visited, a:link {
    color: inherit;
    text-decoration: none;
  }
`;

export default App;
