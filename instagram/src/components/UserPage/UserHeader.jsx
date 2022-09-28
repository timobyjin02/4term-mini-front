import ProfilePic from "./ProfilePic";
import HeaderSection from "./HeaderSection";
import { HeaderContainer } from "../../styles/UserPage/UserHeaderStyle";
import { useEffect, useState } from "react";
import axios from "../../api/config";

function UserHeader({ userNo, postData }) {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    axios.get(`user/profile/${userNo}`).then((res) => {
      setUserInfo({ ...res.data.userInfo });
    });
  }, [userNo]);

  return (
    <>
      {userInfo ? (
        <HeaderContainer>
          <ProfilePic profileImg={userInfo.profile_image} />
          <HeaderSection
            userName={userInfo.name}
            userNickname={userInfo.nickname}
            postData={postData}
          />
        </HeaderContainer>
      ) : null}
    </>
  );
}

export default UserHeader;
