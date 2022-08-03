import React from "react";
import {
  ItemBox,
  ItemName,
  Item,
  InputBox,
  ItemInput,
} from "../../styles/ProfileEditPage/ItemDetail_style";

function ItemDetail({ itemName }) {
  return (
    <ItemBox>
      <ItemName>
        <Item htmlFor={itemName}>{itemName}</Item>
      </ItemName>
      <InputBox>
        <ItemInput
          maxLength={itemName === "소개" ? 55 : 15}
          id={itemName}
          className={itemName === "소개" ? "higher" : "default"}
        ></ItemInput>
      </InputBox>
    </ItemBox>
  );
}

export default ItemDetail;
