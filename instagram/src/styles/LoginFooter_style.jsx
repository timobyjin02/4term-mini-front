import styled from "@emotion/styled";

export const Footer = styled.div`
  width: 350px;
  height: 63px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  font-weight: 400;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  a {
    margin-left: 3px;
    color: ${({ theme }) => theme.palette.btnHover};
    text-decoration: none;
  }
`;
