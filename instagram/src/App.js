import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { injectGlobal } from "@emotion/css";
import Login from "./components/Login";
import Join from "./components/Join";
import Navigation from "./components/Navigation";
import RandomPost from "./components/RandomPost";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Join" element={<Join />}></Route>
        <Route path="/Navigation" element={<Navigation />}></Route>
        <Route path="/random" element={<RandomPost />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
