import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function PostingBox() {
  return (
    <DivPostingBox>
      <PostBox>
        <Link to="/comments">
          <PostImg />
        </Link>
      </PostBox>
      <PostBox>
        <Link to="comments">
          <PostImg />
        </Link>
      </PostBox>
      <PostBox>
        <Link to="comments">
          <PostImg />
        </Link>
      </PostBox>
    </DivPostingBox>
  );
}

export default PostingBox;

const DivPostingBox = styled.div`
  display: flex;
`;

const PostBox = styled.div`
  margin-right: 12px;
`;

const PostImg = styled.div`
  width: 248px;
  height: 248px;
  background-color: lightgray;
`;
