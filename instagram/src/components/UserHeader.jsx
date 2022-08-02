import React from "react";
import styled from "@emotion/styled";
import ProfilePic from "./ProfilePic";
import HeaderSection from "./HeaderSection";

function UserHeader() {
  return (
    <HeaderContainer>
      <ProfilePic />
      <HeaderSection />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 935px;
  height: 150px;
  margin-top: 30px;
  display: flex;
`;

export default UserHeader;
