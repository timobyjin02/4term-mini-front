import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  ProfileEditItemBox,
  ProfileEditItemName,
  ProfileEditItem,
  ProfileEditInputBox,
  ProfileEditItemInput,
  EditGender,
} from "../../styles/ProfileEditPage/ItemDetailStyle";
function ItemDetail({ itemName, keyName, userData, setUserData }) {
  // const [defaultGender, setDefaultGender] = useState("0");

  // useEffect(() => {
  //   if (userData.gender === "1") {
  //     setDefaultGender("1");
  //   } else if (userData.gender === "0") {
  //     setDefaultGender("0");
  //   }
  // }, [userData.gender]);

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
            <option value="0">남성</option>
            <option value="1">여성</option>
          </EditGender>
        ) : (
          <ProfileEditItemInput
            value={userData[keyName] ? userData[keyName] : ""}
            onChange={onChange}
            maxLength={itemName === "소개" ? 55 : 25}
            id={itemName}
            className={itemName === "소개" ? "higher" : "default"}
          ></ProfileEditItemInput>
        )}
      </ProfileEditInputBox>
    </ProfileEditItemBox>
  );
}

export default ItemDetail;
