import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
  padding-bottom: 80px;
`;

export const MainContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  margin: 60px auto 0px;
  width: 935px;
  height: 600px;
`;
