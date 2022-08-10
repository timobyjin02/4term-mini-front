import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  /* justify-content: center;
align-items: center; */
  height: 100%;
`;

export const SelectedImg = styled.img`
  width: 550px;
  border-bottom-left-radius: 12px; ;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 339px;
  height: 100%;
  margin: 0px 10px;

  /* justify-content: center;
align-items: center; */
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const UserImage = styled.div`
  width: 32px;
  height: 32px;
  background: lightgray;
  border-radius: 50px;
`;

export const Nickname = styled.div`
  font-weight: bold;
  margin: 0px 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 200px;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
`;
