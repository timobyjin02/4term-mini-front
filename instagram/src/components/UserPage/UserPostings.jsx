import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PostingBox,
  Posts,
  PostImg,
} from "../../styles/UserPage/UserPostingsStyle";
import { getUserNo } from "../../utils/getToken";
import axios from "../../api/config";

function UserPostings() {
  const [postData, setPostData] = useState({});
  const userPost = [];
  const userNo = getUserNo();

  useEffect(() => {
    axios.get(`post/profile/${userNo}`).then((res) => {
      setPostData({ ...res.data });
    });
  }, [userNo]);

  for (let value of Object.values(postData)) {
    userPost.push(value);
  }

  const postings = (arr) => {
    const postsData = [];
    const boxCount = Math.ceil(arr.length / 3);
    const reverseArr = [...arr].reverse();
    for (let i = 0; i < boxCount; i++) {
      postsData[i] = [...reverseArr].splice(i * 3, 3);
    }
    return postsData;
  };

  const posts = postings(userPost);

  return (
    <>
      {posts.map((post, index) => {
        const paths = [
          {
            id: `${index}0`,
            data: post[0]?.firstImage,
            linkTo: `/p/${post[0]?.postNo}`,
          },
          {
            id: `${index}1`,
            data: post[1]?.firstImage,
            linkTo: `/p/${post[1]?.postNo}`,
          },
          {
            id: `${index}2`,
            data: post[2]?.firstImage,
            linkTo: `/p/${post[2]?.postNo}`,
          },
        ];
        return (
          <PostingBox key={paths[0].id}>
            {paths.map((item) => (
              <Posts key={item.id}>
                <Link to={item.linkTo}>
                  {item.data ? <PostImg src={item.data} /> : null}
                </Link>
              </Posts>
            ))}
          </PostingBox>
        );
      })}
    </>
  );
}

export default UserPostings;
