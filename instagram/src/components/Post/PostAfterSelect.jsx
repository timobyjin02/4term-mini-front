import { useState } from "react";
import {
  Container,
  SelectedImg,
  Wrap,
  UserInfo,
  UserImage,
  Content,
  Input,
  Nickname,
} from "../../styles/Post/PostAfterSelectStyle";

function PostAfterSelect({ imgSrc }) {
  const [userId, setUserId] = useState("bang");
  return (
    <Container>
      <SelectedImg src={imgSrc} />
      <Wrap>
        <UserInfo>
          <UserImage />
          <Nickname>{userId}</Nickname>
        </UserInfo>
        <Content>
          <Input placeholder="문구 입력..." />
        </Content>
      </Wrap>
    </Container>
  );
}

export default PostAfterSelect;
