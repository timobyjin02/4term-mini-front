import styled from "@emotion/styled";
import React from 'react'

function Input() {
  return (
    <DivInputBox>
            <InputText placeholder='전화번호, 사용자 이름 또는 이메일'/>
            <InputText placeholder='비밀번호'/>
    </DivInputBox>
  )
}

export default Input;

const DivInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const InputText = styled.input`
  box-sizing: border-box; // index.css에
  width: 268px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey };
  outline: none;
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 11px 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`