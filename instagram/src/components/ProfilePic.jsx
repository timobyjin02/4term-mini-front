import styled from "@emotion/styled";

function ProfilePic() {
  return (
    <PictureBox>
      {/* 사진 박스 */}
      <ProfilePicture />
    </PictureBox>
  );
}

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  background-color: lightgray;
  border-radius: 50%;
`;

const PictureBox = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 30px;

  width: 300px;
  height: 150px;
`;

export default ProfilePic;
