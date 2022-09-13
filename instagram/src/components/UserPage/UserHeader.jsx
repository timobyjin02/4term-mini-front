import ProfilePic from "./ProfilePic";
import HeaderSection from "./HeaderSection";
import { HeaderContainer } from "../../styles/UserPage/UserHeaderStyle";
import { useEffect, useState } from "react";
import { getUserNo } from "./../../utils/getToken";
import axios from "../../api/config";

function UserHeader() {
  const [userInfo, setUserInfo] = useState({});
  const userNo = getUserNo();

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
          />
        </HeaderContainer>
      ) : null}
    </>
  );
}

export default UserHeader;
