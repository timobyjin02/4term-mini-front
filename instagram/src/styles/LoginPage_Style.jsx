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
  top: 47px;
  margin-top: 10px;
  width: 175px;
  // height: 100%;
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
