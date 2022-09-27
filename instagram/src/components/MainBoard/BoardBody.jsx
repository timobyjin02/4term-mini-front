import React from "react";
import {
  Header,
  ProfileImage,
  UserId,
  Image,
} from "../../styles/MainBoard/MainBoardStyle";

function BoardBody({ profileImage, nickname, images }) {
  return (
    <>
      <Header>
        {profileImage ? (
          <ProfileImage alt="profile image" src={profileImage} />
        ) : (
          <ProfileImage alt="profile image" src="/img/profile.png" />
        )}
        <UserId>{nickname}</UserId>
      </Header>
      <Image src={images[0]}></Image>
    </>
  );
}

export default BoardBody;
