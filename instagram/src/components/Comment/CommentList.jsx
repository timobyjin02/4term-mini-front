import { Comment, CommentsText } from "../../styles/Comment/CommentList";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis.svg";

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
            <Ellipsis onClick={() => {}} className="icon" />
          </CommentsText>
        );
      })}
    </>
  );
}

export default CommentList;
