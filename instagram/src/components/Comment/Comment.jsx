import { useState } from "react";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import {
  Wrapper,
  Container,
} from "../../styles/Comment/Comment";


function Comment({nickname}) {
  const [commentArray, setCommentArray] = useState([]);

  const addHandler = (value) => {
    setCommentArray(prevState => ([...prevState, value]))

  }

  // console.log(nickname)
  return (
    <Wrapper>
      {/* 아이디 불러와야함 */}
      <CommentList nickname={nickname} commentArray={commentArray} />
      <Container>
      <CommentInput onAdd={addHandler}/>
      </Container>
    </Wrapper>
  )
}

export default Comment;
