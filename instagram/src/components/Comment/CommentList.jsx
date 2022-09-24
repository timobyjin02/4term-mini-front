import { Nickname, Comment, CommentsText} from "../../styles/Comment/CommentList";

function CommentList({nickname, commentArray}) {

  return (
    <>
    {commentArray.map((comment, index) => {
      return (
        <CommentsText key={index} >
          <Comment><b>{nickname}</b>{comment}</Comment>
          </CommentsText>
      )
    })}
    </>
  )
}

export default CommentList;

