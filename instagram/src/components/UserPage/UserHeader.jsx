import ProfilePic from "./ProfilePic";
import HeaderSection from "./HeaderSection";
import { HeaderContainer } from "../../styles/UserPage/UserHeaderStyle";

function UserHeader({ isLoaded, userInfo, postData }) {
  return (
    <>
      <HeaderContainer>
        <ProfilePic profileImg={userInfo.profile_image} />
        <HeaderSection
          userName={userInfo.name}
          userNickname={userInfo.nickname}
          postData={postData}
        />
      </HeaderContainer>
    </>
  );
}

export default UserHeader;
