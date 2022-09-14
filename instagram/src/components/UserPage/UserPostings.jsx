import { Link } from "react-router-dom";
import {
  PostingBox,
  Posts,
  PostImg,
} from "../../styles/UserPage/UserPostingsStyle";

const imgArray = [1, 2, 3, 4, 5, 6, 7, 8];

function UserPostings() {
  // const reverseArray = [...imgArray].reverse();
  // const boxCount = Math.ceil(reverseArray.length / 3);
  const postings = (arr) => {
    const postsData = [];
    const boxCount = Math.ceil(arr.length / 3);
    const reverseArr = [...arr].reverse();
    for (let i = 1; i < boxCount + 1; i++) {
      postsData[i - 1] = [...reverseArr].splice(i * 3 - 3, 3);
    }
    return postsData;
  };
  const posts = postings(imgArray);
  console.log(posts);

  return (
    <>
      {posts.map((post, index) => {
        const paths = [
          { id: `0${index}`, data: post[0], linkTo: "/comments" },
          { id: `1${index}`, data: post[1], linkTo: "/comments" },
          { id: `2${index}`, data: post[2], linkTo: "/comments" },
        ];
        return (
          <PostingBox key={paths[0].id}>
            {paths.map((item) => (
              <Posts key={item.id}>
                <Link to={item.linkTo}>
                  {item.data ? <PostImg>{item.data}</PostImg> : null}
                </Link>
              </Posts>
            ))}
          </PostingBox>
        );
      })}

      {/* <PostingBox>
        {paths.map((item) => (
          <Posts key={item.id}>
            <Link to={item.linkTo}>
              <PostImg>{}</PostImg>
            </Link>
          </Posts>
        ))}
      </PostingBox> */}
    </>
  );
}

export default UserPostings;
