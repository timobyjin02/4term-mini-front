import styled from "@emotion/styled";
import React from 'react'
import { Link } from 'react-router-dom';

function LoginFooter() {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("eeeee")
  // }

  return (
    <DivFooter>
      계정이 없으신가요?<Link to="/join">가입하기</Link> 
    </DivFooter>
  )
}

export default LoginFooter;

const DivFooter = styled.div`
    width: 350px;
    height: 63px;
    border: 1px solid ${({ theme }) => theme.palette.borderGrey };
    font-weight: 400;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    a {
      margin-left: 3px;
        color: ${({ theme }) => theme.palette.btnHover };
        text-decoration: none;
    }
`