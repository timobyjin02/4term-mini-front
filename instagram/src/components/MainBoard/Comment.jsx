import CommentMenu from "./CommentMenu";
import {
  Comments,
  CommentsPost,
  CommentsAllView,
  CommentsText,
  Liked,
  LikedText,
} from "../../styles/MainBoard/MainBoardStyle";

function Comment() {
  return (
    <>
      <CommentMenu />
      <Liked>
        <LikedText>좋아요 4개</LikedText>
      </Liked>
      <Comments>
        <CommentsPost>내가 쓴 글</CommentsPost>
        <CommentsAllView>댓글 모두 보기</CommentsAllView>
        <CommentsText>댓글들 보임</CommentsText>
      </Comments>
    </>
  );
}

export default Comment;
