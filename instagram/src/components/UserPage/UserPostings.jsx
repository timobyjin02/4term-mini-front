import { Link } from "react-router-dom";
import {
  PostingBox,
  Posts,
  PostImg,
} from "../../styles/UserPage/UserPostings_style";

function UserPostings() {
  return (
    <PostingBox>
      <Posts>
        <Link to="/comments">
          <PostImg />
        </Link>
      </Posts>
      <Posts>
        <Link to="comments">
          <PostImg />
        </Link>
      </Posts>
      <Posts>
        <Link to="comments">
          <PostImg />
        </Link>
      </Posts>
    </PostingBox>
  );
}

export default UserPostings;
