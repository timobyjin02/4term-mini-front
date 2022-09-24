import { Comment, CommentsText } from "../../styles/Comment/CommentList";

function CommentList({ commentArray }) {
  return (
    <>
      {commentArray.map((comment, index) => {
        return (
          <CommentsText key={index}>
            <Comment>
              <b>{comment.nickname}</b>
              {comment.content}
            </Comment>
          </CommentsText>
        );
      })}
    </>
  );
}

export default CommentList;
