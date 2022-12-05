import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  ProfileImage,
  UserId,
  Image,
} from "../../styles/MainBoard/MainBoardStyle";

function BoardBody({ profileImage, nickname, images }) {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <ProfileImage
          onClick={() => navigate(`/${nickname}`)}
          alt="profile image"
          src={profileImage || "/img/profile.png"}
        />
        <UserId onClick={() => navigate(`/${nickname}`)}>{nickname}</UserId>
      </Header>
      <Image src={images[0]}></Image>
    </>
  );
}

export default BoardBody;
