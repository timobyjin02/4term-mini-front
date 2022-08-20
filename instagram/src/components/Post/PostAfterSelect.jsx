import { useState } from "react";
import axios from "axios";
import {
  Container,
  SelectedImg,
  Wrap,
  UserInfo,
  UserImage,
  Content,
  Input,
  Nickname,
  SubmitBtn,
} from "../../styles/Post/PostAfterSelectStyle";

function PostAfterSelect({ imgSrc }) {
  const onSubmit = () => {
    const url = `/~~`;
    const userNo = 10;
    const content = "hihihi man";
    const token = "1QR32A";

    const formData = new FormData();
    formData.append("userNo", userNo);
    formData.append("content", content);
    formData.append("files", imgSrc);

    const config = {
      headers: {
        authorization: token,
      },
    };

    for (let pair of formData.entries()) {
      console.log(pair[0], "+", pair[1]);
    }
    // console.log(formData.values());
    axios.post(url, formData, config);
  };

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
        <SubmitBtn onClick={onSubmit}>공유하기</SubmitBtn>
      </Wrap>
    </Container>
  );
}

export default PostAfterSelect;
