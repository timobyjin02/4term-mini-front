import React from "react";
import {
  ProfileEditItemBox,
  ProfileEditItemName,
  ProfileEditItem,
  ProfileEditInputBox,
  ProfileEditItemTextarea,
} from "../../styles/ProfileEditPage/ItemDetailStyle";

function Description({ itemName, keyName, userData, setUserData }) {
  const onChange = (event) => {
    setUserData({
      ...userData,
      [keyName]: event.target.value,
    });
  };

  return (
    <ProfileEditItemBox>
      <ProfileEditItemName>
        <ProfileEditItem htmlFor={itemName}>{itemName}</ProfileEditItem>
      </ProfileEditItemName>
      <ProfileEditInputBox>
        <ProfileEditItemTextarea
          value={userData[keyName] ? userData[keyName] : ""}
          onChange={onChange}
          maxLength={55}
          id={itemName}
        ></ProfileEditItemTextarea>
      </ProfileEditInputBox>
    </ProfileEditItemBox>
  );
}

export default Description;
