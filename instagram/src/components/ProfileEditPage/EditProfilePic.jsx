import { useState } from "react";
import {
  PictureId,
  UserPic,
  UserIdEditPic,
  Nickname,
  PicEditBtn,
  InputPicFile,
  PicEditModalBtn,
} from "../../styles/ProfileEditPage/EditProfilePicStyle";
import EditPicModal from "./EditPicModal";

function EditProfilePic({ userData, setUserData, nickname, img, setImg }) {
  const [showModal, setShowModal] = useState(false);

  const onUploadPic = (event) => {
    setUserData({ ...userData, profileImg: event.target.files[0] });
    setImg(URL.createObjectURL(event.target.files[0]));
    setShowModal(false);
  };

  const deletePic = () => {
    setUserData({ ...userData, profileImg: null });
    setImg(null);
    setShowModal(false);
  };

  return (
    <PictureId>
      <UserPic src={img ? img : "img/defaultProfile.jpg"} />
      <UserIdEditPic>
        <Nickname>{nickname}</Nickname>
        {img ? (
          <PicEditModalBtn onClick={() => setShowModal(true)}>
            프로필 사진 바꾸기
          </PicEditModalBtn>
        ) : (
          <PicEditBtn>
            프로필 사진 바꾸기
            <InputPicFile
              onChange={onUploadPic}
              type={"file"}
              accept={"image/*"}
            />
          </PicEditBtn>
        )}
        {showModal ? (
          <EditPicModal
            setUserData={setUserData}
            setImg={setImg}
            setShowModal={setShowModal}
            onUploadPic={onUploadPic}
            deletePic={deletePic}
          />
        ) : null}
      </UserIdEditPic>
    </PictureId>
  );
}

export default EditProfilePic;
