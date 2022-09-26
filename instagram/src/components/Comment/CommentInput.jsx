import {useState} from "react";
import {Container, InputBox, CommentBtn} from "../../styles/Comment/CommentInput";
import { ReactComponent as Smile } from "../../assets/smile.svg";

function CommentInput({ onAdd }) {
  const [comments, setComments] = useState("");

  const clickHandler = () => {
    if (!comments) return
    onAdd(comments);
    setComments('');
  }

  return(
    <Container>
      <Smile className="icon" />
      <InputBox 
        value={comments} // 양방향 바인딩
        onChange={(e) => {
          setComments(e.target.value);
        }}
        placeholder="댓글 달기...">
      </InputBox>
      <CommentBtn onClick={clickHandler}>게시</CommentBtn>
    </Container>
  )
}

export default CommentInput;

