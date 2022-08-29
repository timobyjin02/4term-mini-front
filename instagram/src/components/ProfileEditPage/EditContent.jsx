import EditProfilePic from "./EditProfilePic";
import DetailsForm from "./DetailsForm";
import { Content } from "../../styles/ProfileEditPage/EditContentStyle";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditContent() {
  const [userData, setUserData] = useState({});
  const nav = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(userData)) {
      formData.append(`${key}`, value);
    }
    axios
      .patch(`http://15.164.232.205:8080/moae/user/profile/${37}`, formData)
      .then((res) => alert(res.msg))
      .catch((err) => {
        console.log(err);
        alert("ㅋㅋ 오 류");
      });

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
