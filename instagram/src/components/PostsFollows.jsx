import React from "react";
import styled from "@emotion/styled";

function PostsFollows() {
  return (
    <ListBox>
      <List>
        게시물<ListNumber>0</ListNumber>
      </List>
      <List>
        팔로워<ListNumber>50</ListNumber>
      </List>
      <List>
        팔로우<ListNumber>60</ListNumber>
      </List>
    </ListBox>
  );
}

const ListBox = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin-bottom: 20px;
`;

const List = styled.li`
  list-style: none;
  margin-left: 0px;
  margin-right: 40px;
`;

const ListNumber = styled.span`
  margin-left: 5px;
  font-weight: 600;
`;

export default PostsFollows;
