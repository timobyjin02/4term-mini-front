import styled from "@emotion/styled";

export const PictureId = styled.div`
  width: 698px;
  height: 42px;
  margin: 33px 0 0;
  display: flex;
`;

export const UserPic = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin: 2px 32px 0 124px;
  background-color: lightgray;
`;

export const UserIdEditPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Nickname = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;

export const PicEditBtn = styled.button`
  color: ${({ theme }) => theme.palette.btn};
  font-size: 14px;
  font-weight: 700;
`;
