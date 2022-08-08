import styled from "@emotion/styled";
import { ReactComponent as UploadImage } from "../../assets/Upload.svg";

function PostBeforeSelect({ setSelected, setShowModal }) {
  const onChange = () => {
    setSelected(true);
    setShowModal(false);
  };

  return (
    <Body>
      <UploadImageWrap>
        <UploadImage />
      </UploadImageWrap>
      <Text>사진과 동영상을 여기 끌어다 놓으세요</Text>
      <InputLabel htmlFor="input-file">컴퓨터에서 선택</InputLabel>
      <InputFile
        id="input-file"
        type="file"
        accept="image/png, image/jpg, image/jpeg,"
        onChange={onChange}
      />
    </Body>
  );
}

export default PostBeforeSelect;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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

export const InputLabel = styled.label`
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

export const InputFile = styled.input`
  display: none;
`;
