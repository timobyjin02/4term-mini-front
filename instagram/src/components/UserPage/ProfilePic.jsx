import {
  PictureBox,
  ProfilePicture,
} from "../../styles/UserPage/ProfilePicStyle";

function ProfilePic({ profileImg }) {
  return (
    <PictureBox>
      {/* 사진 박스 */}
      <ProfilePicture
        src={
          profileImg && profileImg.startsWith("https://4terms3buket")
            ? profileImg
            : "img/defaultProfile.jpg"
        }
      />
    </PictureBox>
  );
}

export default ProfilePic;
