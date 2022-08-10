import React from "react";
import CommentMenu from "./CommentMenu";
import {
  Container,
  Card,
  Header,
  ProfileImage,
  UserId,
  Image,
  Liked,
  LikedText,
  Comments,
  CommentsPost,
  CommentsAllView,
  CommentsText,
} from "../styles/MainBoard_Style";

function MainBoard() {
  return (
    <Container>
      <Card>
        <Header>
          <ProfileImage alt="profile image" src="img/profile.png" />
          <UserId>ujin</UserId>
        </Header>
        <Image></Image>
        <CommentMenu />
        <Liked>
          <LikedText>좋아요 4개</LikedText>
        </Liked>
        <Comments>
          <CommentsPost>내가 쓴 글</CommentsPost>
          <CommentsAllView>댓글 모두 보기</CommentsAllView>
          <CommentsText>댓글들 보임</CommentsText>
        </Comments>
      </Card>
    </Container>
  );
}

export default MainBoard;
