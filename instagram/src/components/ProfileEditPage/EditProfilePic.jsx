import { useState } from "react";
import {
  PictureId,
  UserPic,
  UserIdEditPic,
  Nickname,
  PicEditBtn,
  InputPicFile,
} from "../../styles/ProfileEditPage/EditProfilePicStyle";

function EditProfilePic({ userData, setUserData }) {
  const [img, setImg] = useState(null);
  const onUploadPic = (event) => {
    event.preventDefault();
    setUserData({ ...userData, profile_image: event.target.files[0] });
    setImg(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <PictureId>
      <UserPic src={img} onError={'this.style.display = "none"'} />
      <UserIdEditPic>
        <Nickname>modernAgile_4기</Nickname>
        <PicEditBtn>
          프로필 사진 바꾸기
          <InputPicFile
            onChange={onUploadPic}
            type={"file"}
            accept={"image/*"}
          />
        </PicEditBtn>
      </UserIdEditPic>
    </PictureId>
  );
}

export default EditProfilePic;
