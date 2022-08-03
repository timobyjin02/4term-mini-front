import PostsFollows from "./PostsFollows";
import IdEditGear from "./IdEditGear";
import {
  HeaderContainer,
  UserName,
} from "../../styles/UserPage/HeaderSection_style";

function HeaderSection() {
  return (
    <HeaderContainer>
      <IdEditGear />
      <PostsFollows />
      <UserName>이름</UserName>
    </HeaderContainer>
  );
}

export default HeaderSection;
