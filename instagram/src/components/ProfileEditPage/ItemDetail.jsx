import React, { useState } from "react";
import {
  ProfileEditItemBox,
  ProfileEditItemName,
  ProfileEditItem,
  ProfileEditInputBox,
  ProfileEditItemInput,
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
        <ProfileEditItemInput
          onChange={onChange}
          maxLength={itemName === "소개" ? 55 : 15}
          id={itemName}
          className={itemName === "소개" ? "higher" : "default"}
        ></ProfileEditItemInput>
      </ProfileEditInputBox>
    </ProfileEditItemBox>
  );
}

export default ItemDetail;
