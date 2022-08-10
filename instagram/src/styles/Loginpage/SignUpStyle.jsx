import styled from "@emotion/styled";

export const Login = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginBox = styled.div`
  width: 350px;
  height: 396px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
`;

export const LoginContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgLogo = styled.img`
  position: absolute;
  top: 50px;
  width: 175px;
`;

export const Text = styled.div`
  width: 304px;
  height: 58px;
  margin-top: 100px;
  font-weight: 700;
  font-size: 15px;
  color: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputText = styled.input`
  box-sizing: border-box; // index.css에
  width: 268px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 4px;
  outline: none;
  margin-bottom: 5px;
  padding: 11px 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

export const LoginBtn = styled.button`
  width: 268px;
  height: 30px;
  margin-top: 6px;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.btn};
  color: ${({ theme }) => theme.palette.backgroundWhite};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;
