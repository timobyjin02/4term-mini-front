import { useState } from "react";
import axios from "axios";
import { getToken, getUserNo } from "../../utils/getToken";
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

function PostAfterSelect({ imgSrc, setShowModal }) {
  const [content, setContent] = useState("");
  const onSubmit = async () => {
    const url = `${process.env.REACT_APP_URL}post`;
    const userNo = getUserNo();
    const formData = new FormData();
    formData.append("userNo", userNo);
    formData.append("content", content);
    for (let file of imgSrc.files) {
      formData.append("images", file);
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: getToken(),
      },
    };

    // test
    // console.log(formData.getAll("images"));
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], "+", pair[1]);
    // }

    try {
      let response = await axios.post(url, formData, config);
      console.log(response.data.msg);
      setShowModal(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeContents = (e) => {
    setContent(e.target.value);
  };

  const [userId, setUserId] = useState("bang");
  return (
    <Container>
      <SelectedImg src={imgSrc.URLForShow} />
      <Wrap>
        <UserInfo>
          <UserImage />
          <Nickname>{userId}</Nickname>
        </UserInfo>
        <Content onChange={onChangeContents}>
          <Input placeholder="문구 입력..." />
        </Content>
        <SubmitBtn onClick={onSubmit}>공유하기</SubmitBtn>
      </Wrap>
    </Container>
  );
}

export default PostAfterSelect;
