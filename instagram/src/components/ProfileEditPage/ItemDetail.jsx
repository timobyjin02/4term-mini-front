import React from "react";
import {
  ProfileEditItemBox,
  ProfileEditItemName,
  ProfileEditItem,
  ProfileEditInputBox,
  ProfileEditItemInput,
} from "../../styles/ProfileEditPage/ItemDetailStyle";

function ItemDetail({ itemName }) {
  return (
    <ProfileEditItemBox>
      <ProfileEditItemName>
        <ProfileEditItem htmlFor={itemName}>{itemName}</ProfileEditItem>
      </ProfileEditItemName>
      <ProfileEditInputBox>
        <ProfileEditItemInput
          maxLength={itemName === "소개" ? 55 : 15}
          id={itemName}
          className={itemName === "소개" ? "higher" : "default"}
        ></ProfileEditItemInput>
      </ProfileEditInputBox>
    </ProfileEditItemBox>
  );
}

export default ItemDetail;
