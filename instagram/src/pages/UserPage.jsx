import Navigation from "./Navigation";
import UserHeader from "../components/UserPage/UserHeader";
import UserPostings from "../components/UserPage/UserPostings";
import HeaderBaseline from "../components/UserPage/HeaderBaseline";
import { Container } from "../styles//UserPage/UserPageStyle";
import { useState, useEffect } from "react";
import axios from "../api/config";
import { getUserNickname, getUserNo } from "../utils/getToken";
import { useParams } from "react-router-dom";

function UserPage() {
  let { nickname } = useParams();
  const userNo = getUserNo();
  const userNickname = getUserNickname();
  const [isMyPage, setIsMyPage] = useState(false);
  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (nickname === userNickname) setIsMyPage(true);
    axios.get(`post/profile/${userNo}`).then((res) => {
      setPostData({ ...res.data });
    });
  }, [userNo, nickname, userNickname]);

  return (
    <>
      {isMyPage ? (
        <>
          <Navigation />
          <Container>
            <UserHeader userNo={userNo} postData={postData} />
            <HeaderBaseline />
            <UserPostings postData={postData} />
          </Container>
        </>
      ) : (
        <div>남의 페이지다</div>
      )}
    </>
  );
}

export default UserPage;
