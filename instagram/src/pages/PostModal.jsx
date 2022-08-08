import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { ReactComponent as UploadImage } from "../assets/Upload.svg";

function PostModal({ showModal, setShowModal }) {
  const imageInput = useRef();
  const onClickUpload = () => {
    imageInput.current.click();
  };

  const onClickClose = () => setShowModal(false);
  return (
    <Background onClick={onClickClose}>
      <ExitBtn onClick={onClickClose} />
      <Wrap>
        <Header>
          <H1> 새 게시물 만들기</H1>
        </Header>
        <Body>
          <UploadImageWrap>
            <UploadImage />
          </UploadImageWrap>
          <Text>사진과 동영상을 여기 끌어다 놓으세요</Text>
          <InputButton onClick={onClickUpload}>컴퓨터에서 선택</InputButton>
          <Input
            type="file"
            accept="image/png, image/jpg, image/jpeg,"
            ref={imageInput}
          />
        </Body>
      </Wrap>
    </Background>
  );
}

export const ExitBtn = styled.button`
  position: fixed;
  width: 30px;
  height: 30px;
  right: 0;
  top: 0;
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.modalBackground};
  cursor: default;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  width: 508px;
  height: 551px;
  border-radius: 12px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  border-bottom: solid 1px ${({ theme }) => theme.palette.borderGrey};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 1em;
`;

export const UploadImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.btn};
  height: 30px;
  padding: 5px 9px;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.backgroundWhite};
  font-size: 1em;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`;
export default PostModal;
