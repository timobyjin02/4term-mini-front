import React from "react";
import {
  ProfileEditItemBox,
  ProfileEditItemName,
  ProfileEditItem,
  ProfileEditInputBox,
  EditGender,
} from "../../styles/ProfileEditPage/ItemDetailStyle";

function GenderSelect({ itemName, keyName, userData, setUserData }) {
  const onChange = (event) => {
    setUserData({
      ...userData,
      [keyName]: event.target.value,
    });
  };

  const Male = () => {
    return (
      <EditGender defaultValue={0} onChange={onChange}>
        <option value={0}>남성</option>
        <option value={1}>여성</option>
      </EditGender>
    );
  };

  const Female = () => {
    return (
      <EditGender defaultValue={1} onChange={onChange}>
        <option value={0}>남성</option>
        <option value={1}>여성</option>
      </EditGender>
    );
  };

  return (
    <ProfileEditItemBox>
      <ProfileEditItemName>
        <ProfileEditItem htmlFor={itemName}>{itemName}</ProfileEditItem>
      </ProfileEditItemName>
      <ProfileEditInputBox>
        {Number(userData.gender) === 0 ? <Male /> : <Female />}
      </ProfileEditInputBox>
    </ProfileEditItemBox>
  );
}

export default GenderSelect;
