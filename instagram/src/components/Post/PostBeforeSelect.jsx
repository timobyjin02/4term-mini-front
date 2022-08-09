import { ReactComponent as UploadImage } from "../../assets/Upload.svg";
import {
  Body,
  UploadImageWrap,
  Text,
  InputFile,
  InputLabel,
} from "../../styles/Post/PostBeforeSelect";

function PostBeforeSelect({ setImgSrc, setSelected }) {
  const onChange = (e) => {
    encodeFileToBase64(e.target.files[0]);
    setSelected(true);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
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
