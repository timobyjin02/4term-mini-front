import Navigation from "../components/Navigation";
import UserHeader from "../components/UserPage/UserHeader";
import UserPostings from "../components/UserPage/UserPostings";
import HeaderBaseline from "../components/UserPage/HeaderBaseline";
import { Container } from "../styles//UserPage/UserPage_style";

function UserPage() {
  return (
    <>
      <Navigation />
      <Container>
        <UserHeader />
        <HeaderBaseline />
        <UserPostings />
      </Container>
    </>
  );
}

export default UserPage;
