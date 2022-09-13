import FooterMenu from "./FooterMenu";
import {
  FooterContainer,
  Content,
  LikeWrap,
  LikeText,
  ContentsNickname,
  NicknameAndContent,
} from "../../styles/MainBoard/MainBoardStyle";

function BoardFooter({ nickname, content }) {
  return (
    <FooterContainer>
      <FooterMenu />
      <LikeWrap>
        <LikeText>좋아요 532개</LikeText>
      </LikeWrap>
      <Contents nickname={nickname} content={content} />
    </FooterContainer>
  );
}

function Contents({ nickname, content }) {
  return (
    <NicknameAndContent>
      <ContentsNickname>{nickname}yeoreum</ContentsNickname>
      <Content>{content}</Content>
    </NicknameAndContent>
  );
}

export default BoardFooter;
