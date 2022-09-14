import { Link } from "react-router-dom";
import {
  PostingBox,
  Posts,
  PostImg,
} from "../../styles/UserPage/UserPostingsStyle";

function UserPostings() {
  const paths = [
    { id: 1, linkTo: "/comments" },
    { id: 2, linkTo: "/comments" },
    { id: 3, linkTo: "/comments" },
  ];
  return (
    <>
      <PostingBox>
        {paths.map((item) => (
          <Posts key={item.id}>
            <Link to={item.linkTo}>
              <PostImg></PostImg>
            </Link>
          </Posts>
        ))}
      </PostingBox>
    </>
  );
}

export default UserPostings;
