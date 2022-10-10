import PostsFollows from "./PostsFollows";
import IdEditGear from "./IdEditGear";
import {
  HeaderContainer,
  UserName,
} from "../../styles/UserPage/HeaderSectionStyle";

function HeaderSection({ isMyPage, userName, userNickname, postData }) {
  return (
    <HeaderContainer>
      <IdEditGear isMyPage={isMyPage} userNickname={userNickname} />
      <PostsFollows postData={postData} />
      <UserName>{`${userName}`}</UserName>
    </HeaderContainer>
  );
}

export default HeaderSection;
