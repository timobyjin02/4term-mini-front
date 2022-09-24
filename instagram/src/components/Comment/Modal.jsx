import { Frame, Background, Contents, Item } from "../../styles/Comment/Modal";

function Modal({ modalToggle, onClose }) {
  return (
    <Frame modalToggle={modalToggle}>
      <Background onClick={onClose} />
      <Contents>
        <Item>삭제</Item>
      </Contents>
    </Frame>
  );
}

export default Modal;
