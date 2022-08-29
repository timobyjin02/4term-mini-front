import React from "react";
import {
  ProfileEditItemBox,
  ProfileEditItemName,
  ProfileEditItem,
  ProfileEditInputBox,
  ProfileEditItemInput,
  EditGender,
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
        {itemName === "성별" ? (
          <EditGender onChange={onChange}>
            <option>남성</option>
            <option>여성</option>
          </EditGender>
        ) : (
          <ProfileEditItemInput
            onChange={onChange}
            maxLength={itemName === "소개" ? 55 : 15}
            id={itemName}
            className={itemName === "소개" ? "higher" : "default"}
          ></ProfileEditItemInput>
        )}
      </ProfileEditInputBox>
    </ProfileEditItemBox>
  );
}

export default ItemDetail;
