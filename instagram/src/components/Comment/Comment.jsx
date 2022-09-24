import { useState } from "react";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import { Wrapper, Container } from "../../styles/Comment/Comment";
import axios from "axios";
import { getToken, getUserNickname, getUserNo } from "../../utils/getToken";
import { useEffect } from "react";
import catchGlobalError from "../../utils/catchGlobalError";

function Comment({ postNo }) {
  const [commentArray, setCommentArray] = useState([]);

  const addHandler = async value => {
    const userNo = getUserNo();
    const token = getToken();
    const nickname = getUserNickname();
    // 유효성 검사
    if (!userNo) {
      console.log("userNo가 없음");
      return;
    }
    if (!token) {
      console.log("token이 없습니다");
    }
    if (!nickname) {
      console.log("nickname 없습니다");
    }

    const body = {
      content: value,
    };

    const options = {
      params: {
        userNo,
        postNo,
      },
      headers: {
        authorization: token,
      },
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}comment/`,
        body,
        options
      );
      const newComment = {
        commentNo: response.data.commentNo,
        userNo,
        date: null,
        content: value,
        profileImage: null,
        nickname,
      };
      setCommentArray(prevState => [...prevState, newComment]);
    } catch (err) {
      catchGlobalError(err);
    }
  };

  const getComment = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}comment/${postNo}`
      );
      setCommentArray(response.data);
    } catch (err) {
      catchGlobalError(err);
    }
  };
  useEffect(() => {
    getComment();
  }, []);

  return (
    <Wrapper>
      {/* 아이디 불러와야함 */}
      <CommentList commentArray={commentArray} />
      <Container>
        <CommentInput onAdd={addHandler} />
      </Container>
    </Wrapper>
  );
}

export default Comment;
