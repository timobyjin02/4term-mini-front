import { Frame, Background, Contents, Item } from "../../styles/Comment/Modal";

function Modal({ modalToggle, onClose, onDeleteComment }) {
  return (
    <Frame modalToggle={modalToggle}>
      <Background onClick={onClose} />
      <Contents>
        <Item onClick={onDeleteComment}>삭제</Item>
      </Contents>
    </Frame>
  );
}

export default Modal;
