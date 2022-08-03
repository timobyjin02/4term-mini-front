import {
  ItemForm,
  SubmitBtn,
} from "../../styles/ProfileEditPage/DetailsForm_style";
import ItemDetail from "./ItemDetail";

function DetailsForm() {
  return (
    <ItemForm>
      <ItemDetail itemName={"이름"} />
      <ItemDetail itemName={"사용자 이름"} />
      <ItemDetail itemName={"웹 사이트"} />
      <ItemDetail itemName={"소개"} />
      <ItemDetail itemName={"이메일"} />
      <ItemDetail itemName={"전화번호"} />
      <ItemDetail itemName={"성별"} />
      <SubmitBtn>제출</SubmitBtn>
    </ItemForm>
  );
}

export default DetailsForm;
