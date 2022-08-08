import { useState } from "react";
import styled from "@emotion/styled";
import PostAfterSelect from "../components/Post/PostAfterSelect";
import PostBeforeSelect from "../components/Post/PostBeforeSelect";

function PostModal({ setShowModal, showModal }) {
  const [selected, setSelected] = useState(false);
  const onClickClose = () => setShowModal(false);

  const Container = ({ children }) => (
    <Background>
      <ExitBtn onClick={onClickClose} />
      <Wrap>
        <Header>
          <H1> 새 게시물 만들기</H1>
        </Header>
        {children}
      </Wrap>
    </Background>
  );

  return (
    <>
      {selected ? (
        <Container>
          <PostAfterSelect />
        </Container>
      ) : (
        <Container setShowModal={setShowModal}>
          <PostBeforeSelect setSelected={setSelected} />
        </Container>
      )}
    </>
  );
}

export const ExitBtn = styled.button`
  position: fixed;
  width: 30px;
  height: 30px;
  right: 0;
  top: 0;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.modalBackground};
  cursor: default;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  width: 508px;
  height: 551px;
  border-radius: 12px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  border-bottom: solid 1px ${({ theme }) => theme.palette.borderGrey};
`;

export const H1 = styled.h1`
  font-size: 1em;
`;

export default PostModal;
