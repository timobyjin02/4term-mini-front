import { Body, Container } from "../styles/Explore_style";
import Navigation from "../components/Navigation";
import Images from "../components/ExploreImageRender";

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
