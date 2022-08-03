import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { injectGlobal } from "@emotion/css";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import Explore from "./pages/Explore";
import Post from "./pages/Post";
import Explore from "./components/Explore";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/username" element={<UserPage />}></Route>
      </Routes>
    </Router>
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
