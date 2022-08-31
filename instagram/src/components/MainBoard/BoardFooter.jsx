import FooterMenu from "./FooterMenu";
import {
  FooterContainer,
  Comments,
  Contents,
  CommentsAllView,
  LikeWrap,
  LikeText,
  CommentNickname,
  NicknameAndContent,
  Date,
} from "../../styles/MainBoard/MainBoardStyle";

function BoardFooter({ nickname, content, date }) {
  return (
    <FooterContainer>
      <FooterMenu />
      <LikeWrap>
        <LikeText>좋아요 532개</LikeText>
      </LikeWrap>
      <NicknameAndContent>
        <CommentNickname>{nickname}yeoreum</CommentNickname>
        <Contents>{content}</Contents>
      </NicknameAndContent>
      <CommentsAllView>댓글 모두 보기</CommentsAllView>
      <Comments></Comments>
      <Date>{date.slice(0, 10)}</Date>
    </FooterContainer>
  );
}

export default BoardFooter;
