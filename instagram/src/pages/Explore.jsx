import axios from "axios";
import { Body, Container } from "../styles/Explore/ExploreStyle";
import Navigation from "./Navigation";
import Images from "../components/Explore/ExploreImageRender";
import { useEffect } from "react";

function Explore({ count = 11 }) {
  const url = "http://15.164.232.205:8080/moae/post/all/";

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => console.dir(res))
  //     .catch((err) => console.log(err));
  // });
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
