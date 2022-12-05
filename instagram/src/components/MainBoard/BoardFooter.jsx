import { useNavigate } from "react-router-dom";
import FooterMenu from "./FooterMenu";
import Comment from "../Comment/Comment";
import {
  FooterContainer,
  Content,
  LikeWrap,
  LikeText,
  ContentsNickname,
  NicknameAndContent,
} from "../../styles/MainBoard/MainBoardStyle";

function BoardFooter({ nickname, postNo, content, onShowModal }) {
  return (
    <FooterContainer>
      <FooterMenu />
      <LikeWrap>
        <LikeText>좋아요 532개</LikeText>
      </LikeWrap>
      <Contents nickname={nickname} content={content} />
      <Comment nickname={nickname} postNo={postNo} onShowModal={onShowModal} />
    </FooterContainer>
  );
}

function Contents({ nickname, content }) {
  const navigate = useNavigate();
  return (
    <NicknameAndContent>
      <ContentsNickname onClick={() => navigate(`/${nickname}`)}>
        {nickname}
      </ContentsNickname>
      <Content>{content}</Content>
    </NicknameAndContent>
  );
}

export default BoardFooter;
