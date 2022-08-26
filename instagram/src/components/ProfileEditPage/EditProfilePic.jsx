import {
  PictureId,
  UserPic,
  UserIdEditPic,
  Nickname,
  PicEditBtn,
} from "../../styles/ProfileEditPage/EditProfilePicStyle";

function EditProfilePic() {
  return (
    <PictureId>
      <UserPic />
      <UserIdEditPic>
        <Nickname>modernAgile_4기</Nickname>
        <PicEditBtn>프로필 사진 바꾸기</PicEditBtn>
      </UserIdEditPic>
    </PictureId>
  );
}

export default EditProfilePic;
