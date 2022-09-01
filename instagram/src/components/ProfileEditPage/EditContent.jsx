import EditProfilePic from "./EditProfilePic";
import DetailsForm from "./DetailsForm";
import { Content } from "../../styles/ProfileEditPage/EditContentStyle";
import { useState, useEffect } from "react";
import axios from "../../api/config";
import { getUserNo } from "./../../utils/getToken";
import { useNavigate } from "react-router-dom";

function EditContent() {
  const [userData, setUserData] = useState({});
  const nav = useNavigate();

  const userNo = getUserNo();

  useEffect(() => {
    axios.get(`user/profile/${userNo}`).then((res) => {
      setUserData({ ...res.data.userInfo });
      console.log(res.data.userInfo);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .patch(`user/profile/${userNo}`, userData)
      .then((res) => {
        alert(res.data.msg);
        nav("/username");
      })
      .catch((err) => {
        console.error(err);
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
