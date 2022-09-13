import React from "react";
import CommentMenu from "./CommentMenu";
import Comment from "./Comment";
import {
  Container,
  Card,
  Header,
  ProfileImage,
  UserId,
  Image,
  Liked,
  LikedText,
  CommentsPost,
  // CommentsAllView,
} from "../../styles/Comment/MainBoardStyle";

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
        <CommentsPost>좋은 아침</CommentsPost>
        {/* <CommentsAllView>댓글 모두 보기</CommentsAllView> */}
          <Comment />
      </Card>
    </Container>
  );
}

export default MainBoard;


