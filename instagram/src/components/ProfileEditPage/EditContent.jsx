import EditProfilePic from "./EditProfilePic";
import DetailsForm from "./DetailsForm";
import { Content } from "../../styles/ProfileEditPage/EditContentStyle";
import { useState } from "react";

function EditContent() {
  const [userData, setUserData] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };
  return (
    <Content>
      <EditProfilePic userData={userData} setUserData={setUserData} />
      <DetailsForm
        userData={userData}
        setUserData={setUserData}
        onSubmit={onSubmit}
      />
    </Content>
  );
}

export default EditContent;
