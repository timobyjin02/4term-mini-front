import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  BoardsContainer,
  BoardsWrap,
} from "../../styles/MainBoard/MainBoardStyle";
import BoardBody from "./BoardBody";
import BoardFooter from "./BoardFooter";
import Modal from "../Comment/Modal";
import { getToken, getUserNo } from "../../utils/getToken";
import catchGlobalError from "../../utils/catchGlobalError";

function Boards() {
  const [deleteCommentNo, setDeleteCommentNo] = useState(null);
  const [modalToggle, setModalToggle] = useState(false);
  const refreshCommentRef = useRef(null);

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

  // 댓글 삭제 모달 구현
  function onShowModal(commentNo, getComment) {
    setDeleteCommentNo(commentNo);
    setModalToggle(true);
    refreshCommentRef.current = getComment;
  }

  const onClose = () => {
    setModalToggle(false);
    setDeleteCommentNo(null); // 초기화
    refreshCommentRef.current = null;
  };

  const onDeleteComment = async () => {
    const userNo = getUserNo();
    const token = getToken();
    if (!userNo) {
      console.log("userNo가 없습니다.");
    }
    if (!token) {
      console.log("token이 없습니다.");
    }
    const options = {
      params: {
        userNo,
        commentNo: deleteCommentNo,
      },
      headers: {
        authorization: token,
      },
    };
    try {
      await axios.delete(`${process.env.REACT_APP_URL}comment`, options);
      if (refreshCommentRef.current) {
        refreshCommentRef.current(); // Comment.jsx 안에 있는 getComment이다.
        onClose();
      }
    } catch (err) {
      catchGlobalError(err);
    }
  };

  const rendering = () => {
    const result = [];
    for (let i = 1; i < allPostInfo.length; i++) {
      let postInfo = allPostInfo[allPostInfo.length - i];
      result.push(
        <span key={postInfo.postNo}>
          <Board postInfo={postInfo} onShowModal={onShowModal} />
        </span>
      );
    }
    return result;
  };
  return (
    <>
      {allPostInfo.length ? rendering() : null}
      <Modal
        modalToggle={modalToggle}
        onClose={onClose}
        onDeleteComment={onDeleteComment}
      />
    </>
  );
}

function Board({ postInfo, onShowModal }) {
  return (
    <BoardsContainer>
      <BoardsWrap>
        <BoardBody
          profileImage={postInfo.profileImage}
          nickname={postInfo.nickname}
          images={postInfo.images}
        />
        <BoardFooter
          nickname={postInfo.nickname}
          postNo={postInfo.postNo}
          content={postInfo.content}
          date={postInfo.date}
          onShowModal={onShowModal}
        />
      </BoardsWrap>
    </BoardsContainer>
  );
}

export default Boards;
