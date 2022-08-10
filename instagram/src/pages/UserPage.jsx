import Navigation from "./Navigation";
import UserHeader from "../components/UserPage/UserHeader";
import UserPostings from "../components/UserPage/UserPostings";
import HeaderBaseline from "../components/UserPage/HeaderBaseline";
import { Container } from "../styles//UserPage/UserPageStyle";

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
