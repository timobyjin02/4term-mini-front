import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as Gearicon } from "../assets/gearicon.svg";
import UserHeaderList from "./UserHeaderList";

function UserHeader() {
  return (
    <HeaderContainer>
      <DivPictureBox>
        {/* 사진 박스 */}
        <DivProfilePic />
      </DivPictureBox>
      <SectionInfo>
        <DivUserName>
          {/* 유저네임, 프로필편집버튼, 톱니바퀴 */}
          <h2>modernAgile_4기</h2>
          <DivEditProfile>
            <DivEditButton>
              <StyledLink to="/accounts/edit">프로필 편집</StyledLink>
            </DivEditButton>
          </DivEditProfile>
          <DivEditGear>
            <ButtonGear>
              <Gearicon />
            </ButtonGear>
          </DivEditGear>
        </DivUserName>
        <div></div>
        <UserHeaderList />
        <div>
          <SpanUsername>이름</SpanUsername>
        </div>
      </SectionInfo>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 935px;
  height: 150px;
  margin-top: 30px;
  display: flex;
`;

const DivProfilePic = styled.div`
  width: 150px;
  height: 150px;
  background-color: lightgray;
  border-radius: 50%;
`;

const DivPictureBox = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 30px;

  width: 300px;
  height: 150px;
`;

const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 635px;
`;

const DivUserName = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const DivEditProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const DivEditGear = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const DivEditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 94px;
  height: 30px;
  color: #262626;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:active {
    color: black;
  }
`;

const ButtonGear = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: #fafafa;
`;

const SpanUsername = styled.span`
  font-weight: bolder;
`;

export default UserHeader;
