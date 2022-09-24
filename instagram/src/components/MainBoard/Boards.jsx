import { useEffect, useState } from "react";
import axios from "axios";
import {
  BoardsContainer,
  BoardsWrap,
} from "../../styles/MainBoard/MainBoardStyle";
import BoardBody from "./BoardBody";
import BoardFooter from "./BoardFooter";

function Boards() {
  const url = `${process.env.REACT_APP_URL}post/all`;
  const [allPostInfo, setAllPostInfo] = useState([]);
  const getAllPostInfo = async () => {
    try {
      const res = await axios.get(url);
      // console.log(res.data);
      setAllPostInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
  // console.log(postInfo.data);
  return (
    <BoardsContainer>
      <BoardsWrap>
        <BoardBody nickname={postInfo.nickname} images={postInfo.images} />
        <BoardFooter
          nickname={postInfo.nickname}
          content={postInfo.content}
          date={postInfo.date}
        />
      </BoardsWrap>
    </BoardsContainer>
  );
}

export default Boards;
