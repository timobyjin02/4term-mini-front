import EditProfilePic from "./EditProfilePic";
import DetailsForm from "./DetailsForm";
import { Content } from "../../styles/ProfileEditPage/EditContentStyle";
import { useState } from "react";

function EditContent() {
  const [userData, setUserData] = useState({});
  return (
    <Content>
      <EditProfilePic userData={userData} setUserData={setUserData} />
      <DetailsForm userData={userData} setUserData={setUserData} />
    </Content>
  );
}

export default EditContent;
