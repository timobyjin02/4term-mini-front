import styled from "@emotion/styled";

export const ExitBtnWrap = styled.button`
  position: fixed;
  width: 30px;
  height: 30px;
  right: 0;
  top: 0;
  background: none;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.modalBackground};
  /* cursor: default; */
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  width: fit-content;
  height: fit-content;
  border-radius: 12px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  border-bottom: solid 1px ${({ theme }) => theme.palette.borderGrey};
`;

export const H1 = styled.h1`
  font-size: 1em;
`;
