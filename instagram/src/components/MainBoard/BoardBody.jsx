import React from "react";
import {
  Header,
  ProfileImage,
  UserId,
  Image,
} from "../../styles/MainBoard/MainBoardStyle";

function BoardBody({ nickname, images }) {
  // console.log(nickname);
  return (
    <>
      <Header>
        <ProfileImage alt="profile image" src="img/profile.png" />
        <UserId>{nickname}</UserId>
      </Header>
      <Image src={images[0]}></Image>
    </>
  );
}

export default BoardBody;
