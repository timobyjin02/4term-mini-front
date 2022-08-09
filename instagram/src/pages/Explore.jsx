import { Body, Container } from "../styles/Explore/ExploreStyle";
import Navigation from "./Navigation";
import Images from "../components/Explore/ExploreImageRender";

function Explore({ count = 11 }) {
  return (
    <>
      <Navigation />
      <Body>
        <Container>
          <Images count={count} />
        </Container>
      </Body>
    </>
  );
}

export default Explore;
