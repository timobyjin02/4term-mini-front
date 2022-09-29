import PostsFollows from "./PostsFollows";
import IdEditGear from "./IdEditGear";
import {
  HeaderContainer,
  UserName,
} from "../../styles/UserPage/HeaderSectionStyle";

function HeaderSection({ userName, userNickname, postData }) {
  return (
    <HeaderContainer>
      <IdEditGear userNickname={userNickname} />
      <PostsFollows postData={postData} />
      <UserName>{`${userName}`}</UserName>
    </HeaderContainer>
  );
}

export default HeaderSection;
