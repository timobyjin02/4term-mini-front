import axios from "axios";
import { Body, Container } from "../styles/Explore/ExploreStyle";
import Navigation from "./Navigation";
import Images from "../components/Explore/ExploreImageRender";
import { useEffect } from "react";
import { useState } from "react";

function Explore() {
  const url = `${process.env.REACT_APP_URL}post/all`;
  const [allPostInfo, setAllPostInfo] = useState([]);
  useEffect(() => {
    async function getAllPostInfo() {
      try {
        const res = await axios.get(url);
        setAllPostInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllPostInfo();
  }, []);
  return (
    <>
      {allPostInfo.length ? (
        <>
          <Navigation />
          <Body>
            <Container>
              <Images allPostInfo={allPostInfo} />
            </Container>
          </Body>
        </>
      ) : null}
    </>
  );
}

export default Explore;
