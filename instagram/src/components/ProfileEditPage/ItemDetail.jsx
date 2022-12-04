import React from "react";
import {
  ProfileEditItemBox,
  ProfileEditItemName,
  ProfileEditItem,
  ProfileEditInputBox,
  ProfileEditItemText,
} from "../../styles/ProfileEditPage/ItemDetailStyle";

function ItemDetail({ itemName, keyName, userData, setUserData }) {
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
        <ProfileEditItemText
          value={userData[keyName] ? userData[keyName] : ""}
          onChange={onChange}
          maxLength={itemName === "웹 사이트" ? 40 : 25}
          id={itemName}
        ></ProfileEditItemText>
      </ProfileEditInputBox>
    </ProfileEditItemBox>
  );
}

export default ItemDetail;
