import React from "react";
import styled from "@emotion/styled";
import Navigation from "../components/Navigation";

function ProfileEditPage() {
  return (
    <Container>
      <Navigation />
      <MainContainer>
        <EditMenu>
          <MenuList>프로필 편집</MenuList>
        </EditMenu>
        <EditContent>
          <PictureId>
            <UserPic />
            <UserIdEditPic>
              <Nickname>modernAgile_4기</Nickname>
              <PicEditBtn>프로필 사진 바꾸기</PicEditBtn>
            </UserIdEditPic>
          </PictureId>
          <DetailsForm>
            <DetailItem itemName={"이름"} inputHeight={"higher"} />
          </DetailsForm>
        </EditContent>
      </MainContainer>
    </Container>
  );
}

function DetailItem({ itemName, inputHeight }) {
  return (
    <ItemBox>
      <ItemName>
        <Item htmlFor={itemName}>{itemName}</Item>
      </ItemName>
      <InputBox>
        <ItemInput
          type="text"
          id={itemName}
          className={inputHeight}
        ></ItemInput>
      </InputBox>
    </ItemBox>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
`;

const MainContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  margin: 60px auto 0;
  width: 935px;
  height: 825px;
`;

const EditMenu = styled.ul`
  width: 235px;
  height: 825px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border-right: 1px solid ${({ theme }) => theme.palette.borderGrey};
`;

const MenuList = styled.li`
  width: 235px;
  height: 52px;
  padding: 16px 16px 16px 30px;
  border-left: 2px solid #262626;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.fontBlack};
`;

const EditContent = styled.article`
  width: 700px;
  height: 825px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
`;

const PictureId = styled.div`
  width: 700px;
  height: 42px;
  margin: 33px 0 0;
  display: flex;
`;

const UserPic = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin: 2px 32px 0 124px;
  background-color: lightgray;
`;

const UserIdEditPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Nickname = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;

const PicEditBtn = styled.button`
  color: #0095f6;
  font-size: 14px;
  font-weight: 700;
`;

const DetailsForm = styled.form`
  width: 700px;
  height: 750px;
  margin: 16px 0;
`;

const ItemBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  width: 355px;
`;

const ItemName = styled.aside`
  width: 194px;
  display: flex;
  justify-content: center;
`;

const Item = styled.label`
  width: 130px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
`;

const ItemInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 3px;
  &:focus {
    border: 2px solid #262626;
  }
  &.default {
    height: 32px;
  }
  &.higher {
    height: 60px;
  }
`;

export default ProfileEditPage;
