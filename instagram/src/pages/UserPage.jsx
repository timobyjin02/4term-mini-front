import Navigation from "./Navigation";
import UserHeader from "../components/UserPage/UserHeader";
import UserPostings from "../components/UserPage/UserPostings";
import HeaderBaseline from "../components/UserPage/HeaderBaseline";
import { Container } from "../styles//UserPage/UserPageStyle";
import { useState, useEffect } from "react";
import axios from "../api/config";
import { getUserNo } from "../utils/getToken";

function UserPage() {
  const userNo = getUserNo();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    axios.get(`post/profile/${userNo}`).then((res) => {
      setPostData({ ...res.data });
    });
  }, [userNo]);

  return (
    <>
      <Navigation />
      <Container>
        <UserHeader userNo={userNo} postData={postData} />
        <HeaderBaseline />
        <UserPostings postData={postData} />
      </Container>
    </>
  );
}

export default UserPage;
