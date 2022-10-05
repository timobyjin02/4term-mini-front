import styled from "@emotion/styled";

export const PostingBox = styled.div`
  display: flex;
  width: 804px;
  margin-bottom: 20px;
`;

export const Posts = styled.div`
  margin-right: 20px;
`;

export const PostImg = styled.img`
  width: 248px;
  height: 248px;
  background-color: lightgray;
  &:hover {
    filter: brightness(70%);
  }
`;
