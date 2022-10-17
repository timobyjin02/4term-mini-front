import { Comment, CommentsText } from "../../styles/Comment/CommentList";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis.svg";
import { getUserNo } from "../../utils/getToken";

function CommentList({ commentArray, onShowModal }) {
  const userNo = getUserNo();

  return (
    <>
      {commentArray.map((comment, index) => {
        console.log(comment);
        return (
          <CommentsText key={index}>
            <Comment>
              <b>{comment.nickname}</b>
              {comment.content}
            </Comment>
            {userNo === comment.userNo && (
              <Ellipsis
                onClick={() => onShowModal(comment.commentNo)}
                className="icon"
              />
            )}
          </CommentsText>
        );
      })}
    </>
  );
}

export default CommentList;
