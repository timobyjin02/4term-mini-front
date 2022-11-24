import React from "react";
import Navigation from "./Navigation";
import EditMenus from "../components/ProfileEditPage/EditMenus";
import EditContent from "../components/ProfileEditPage/EditContent";
import {
  Container,
  MainContainer,
} from "../styles/ProfileEditPage/ProfileEditPageStyle";
import { getUserNo } from "../utils/getToken";

function ProfileEditPage() {
  const userNo = getUserNo();
  return (
    <>
      {userNo ? (
        <Container>
          <Navigation />
          <MainContainer>
            <EditMenus />
            <EditContent />
          </MainContainer>
        </Container>
      ) : (
        <h1>접근 권한이 없습니다.</h1>
      )}
    </>
  );
}

export default ProfileEditPage;
