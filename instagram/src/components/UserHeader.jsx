import React from "react";
import ProfilePic from "./ProfilePic";
import HeaderSection from "./HeaderSection";
import { HeaderContainer } from "../styles/UserHeader_style";

function UserHeader() {
  return (
    <HeaderContainer>
      <ProfilePic />
      <HeaderSection />
    </HeaderContainer>
  );
}

export default UserHeader;
