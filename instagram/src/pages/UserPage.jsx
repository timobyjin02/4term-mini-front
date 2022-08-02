import Navigation from "../components/Navigation";
import UserHeader from "../components/UserHeader";
import styled from "@emotion/styled";
import PostingBox from "../components/PostingBox";
import HeaderBaseline from "../components/HeaderBaseline";

function UserPage() {
  return (
    <>
      <Navigation />
      <Container>
        <UserHeader />
        <HeaderBaseline />
        <PostingBox />
      </Container>
    </>
  );
}

export default UserPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;
