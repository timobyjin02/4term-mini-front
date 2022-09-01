import {
  ItemForm,
  SubmitBtn,
} from "../../styles/ProfileEditPage/DetailsFormStyle";
import ItemDetail from "./ItemDetail";
import Description from "./Description";
import GenderSelect from "./GenderSelect";

function DetailsForm({ userData, setUserData, onSubmit }) {
  return (
    <ItemForm>
      <ItemDetail
        userData={userData}
        setUserData={setUserData}
        keyName="name"
        itemName="이름"
      />
      <ItemDetail
        userData={userData}
        setUserData={setUserData}
        keyName="nickname"
        itemName="사용자 이름"
      />
      <ItemDetail
        userData={userData}
        setUserData={setUserData}
        keyName="website"
        itemName="웹 사이트"
      />
      <Description
        userData={userData}
        setUserData={setUserData}
        keyName="description"
        itemName="소개"
      />
      <ItemDetail
        userData={userData}
        setUserData={setUserData}
        keyName="email"
        itemName="이메일"
      />
      <ItemDetail
        userData={userData}
        setUserData={setUserData}
        keyName="phone"
        itemName="전화번호"
      />
      <GenderSelect
        userData={userData}
        setUserData={setUserData}
        keyName="gender"
        itemName="성별"
      />
      <SubmitBtn onClick={onSubmit}>제출</SubmitBtn>
    </ItemForm>
  );
}

export default DetailsForm;
