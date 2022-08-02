import styled from "@emotion/styled";
import PostsFollows from "./PostsFollows";
import IdEditGear from "./IdEditGear";

function HeaderSection() {
  return (
    <HeaderContainer>
      <IdEditGear />
      <PostsFollows />
      <UserName>이름</UserName>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 635px;
`;

const UserName = styled.span`
  font-weight: bolder;
`;

export default HeaderSection;
