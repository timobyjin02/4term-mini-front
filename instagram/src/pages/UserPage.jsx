import Navigation from "../components/Navigation";
import UserHeader from "../components/UserHeader";
import UserPostings from "../components/UserPostings";
import HeaderBaseline from "../components/HeaderBaseline";
import { Container } from "../styles/UserPage_style";

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
