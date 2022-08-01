import { Body, Container, ImageBox, Image } from "../styles/Explore_style";
import Navigation from "./Navigation";

function Explore() {
  return (
    <>
      <Navigation />
      <Body>
        <Container>
          <ImageBox>
            <Image></Image>
            <Image></Image>
            <Image></Image>
          </ImageBox>
          <ImageBox>
            <Image></Image>
            <Image></Image>
            <Image></Image>
          </ImageBox>
          <ImageBox>
            <Image></Image>
            <Image></Image>
          </ImageBox>
        </Container>
      </Body>
    </>
  );
}

export default Explore;
