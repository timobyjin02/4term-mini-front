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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgLogo = styled.img`
  margin-bottom: 10px;
  width: 175px;
`;