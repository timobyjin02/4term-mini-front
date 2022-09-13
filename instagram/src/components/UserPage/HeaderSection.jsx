import PostsFollows from "./PostsFollows";
import IdEditGear from "./IdEditGear";
import {
  HeaderContainer,
  UserName,
} from "../../styles/UserPage/HeaderSectionStyle";

function HeaderSection({ userName, userNickname }) {
  return (
    <HeaderContainer>
      <IdEditGear userNickname={userNickname} />
      <PostsFollows />
      <UserName>{`${userName}`}</UserName>
    </HeaderContainer>
  );
}

export default HeaderSection;
