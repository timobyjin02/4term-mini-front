import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Wrap } from "../../styles/MainBoard/MainBoardStyle";
import BoardBody from "./BoardBody";
import Comment from "./Comment";

function Boards() {
  const url = `${process.env.REACT_APP_URL}post/all`;
  const [allPostInfo, setAllPostInfo] = useState([]);
  useEffect(() => {
    async function getAllPostInfo() {
      try {
        const res = await axios.get(url);
        // console.log(res.data);
        setAllPostInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllPostInfo();
  }, []);

  const rendering = () => {
    const result = [];
    for (let i = 1; i < allPostInfo.length; i++) {
      // console.log(allPostInfo[i]);
      let postInfo = allPostInfo[allPostInfo.length - i];
      result.push(
        <span key={postInfo.postNo}>
          <Board postInfo={postInfo} />
        </span>
      );
    }
    return result;
  };
  return <>{allPostInfo.length ? rendering() : null}</>;
}

function Board({ postInfo }) {
  console.log(postInfo);
  return (
    <Container>
      <Wrap>
        <BoardBody nickname={postInfo.nickname} images={postInfo.images} />
        <Comment />
      </Wrap>
    </Container>
  );
}

export default Boards;
