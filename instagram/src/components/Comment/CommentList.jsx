import {CommentsText} from "../../styles/Comment/CommentList";

function CommentList({commentArray}) {

  return (
    <>
    {commentArray.map((comment, index) => {
      return (<CommentsText key={index} >{comment}</CommentsText>)
    })}
    </>
  )
}

export default CommentList;
