import { Comment, CommentsText } from "../../styles/Comment/CommentList";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis.svg";

function CommentList({ commentArray, onShowModal }) {
  return (
    <>
      {commentArray.map((comment, index) => {
        return (
          <CommentsText key={index}>
            <Comment>
              <b>{comment.nickname}</b>
              {comment.content}
            </Comment>
            <Ellipsis
              onClick={() => onShowModal(comment.commentNo)}
              className="icon"
            />
          </CommentsText>
        );
      })}
    </>
  );
}

export default CommentList;
