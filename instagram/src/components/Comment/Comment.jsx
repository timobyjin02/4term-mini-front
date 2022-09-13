import { useState } from "react";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import {
  Wrapper,
  Container,
} from "../../styles/Comment/Comment";


function Comment() {
  const [commentArray, setCommentArray] = useState([]
    // { id:'유진', comments: comments},
  );

  const addHandler = (value) => {
    setCommentArray(prevState => ([...prevState, value]))

  }

  return (
    <Wrapper>
      {/* 아이디 불러와야함 */}
      <CommentList commentArray={commentArray} />
      <Container>
      <CommentInput onAdd={addHandler}/>
      </Container>
    </Wrapper>
  )
}

export default Comment;
