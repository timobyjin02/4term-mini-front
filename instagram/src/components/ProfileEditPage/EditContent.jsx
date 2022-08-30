import EditProfilePic from "./EditProfilePic";
import DetailsForm from "./DetailsForm";
import { Content } from "../../styles/ProfileEditPage/EditContentStyle";
import { useState, useEffect } from "react";
import axios from "axios";

function EditContent() {
  const [userData, setUserData] = useState({});

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    axios
      .get("http://3.35.218.239:8080/moae/user/profile/42", {
        headers: { authorization: token },
      })
      .then((res) => setUserData({ ...res.data.userInfo }));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .patch(`http://3.35.218.239:8080/moae/user/profile/42`, userData, {
        headers: { authorization: token },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
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
