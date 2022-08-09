import { useState } from "react";
import PostAfterSelect from "../components/Post/PostAfterSelect";
import PostBeforeSelect from "../components/Post/PostBeforeSelect";
import {
  ExitBtn,
  Background,
  Wrap,
  Header,
  H1,
} from "../styles/Post/PostModalStyle";

function PostModal({ setShowModal }) {
  const [imgSrc, setImgSrc] = useState("");
  const [selected, setSelected] = useState(false);
  const close = () => setShowModal(false);
  const stopBubble = (e) => e.stopPropagation();

  const Container = ({ children }) => (
    <Background onClick={close}>
      <ExitBtn />
      <Wrap onClick={stopBubble}>
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
          <PostAfterSelect imgSrc={imgSrc} />
        </Container>
      ) : (
        <Container>
          <PostBeforeSelect setImgSrc={setImgSrc} setSelected={setSelected} />
        </Container>
      )}
    </>
  );
}

export default PostModal;
