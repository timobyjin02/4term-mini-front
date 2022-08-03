import { ReactComponent as Gearicon } from "../../assets/gearicon.svg";
import { Link } from "react-router-dom";
import {
  IdEditGearBox,
  Nickname,
  GearBtnBox,
  GearBtn,
  EditBtnBox,
  EditBtn,
} from "../../styles/UserPage/IdEditGear_style";

function IdEditGear() {
  return (
    <IdEditGearBox>
      {/* 유저네임, 프로필편집버튼, 톱니바퀴 */}
      <Nickname>modernAgile_4기</Nickname>
      <EditButton />
      <Gear />
    </IdEditGearBox>
  );
}

function Gear() {
  return (
    <GearBtnBox>
      <GearBtn>
        <Gearicon />
      </GearBtn>
    </GearBtnBox>
  );
}

function EditButton() {
  return (
    <EditBtnBox>
      <Link to="/edit">
        <EditBtn>프로필 편집</EditBtn>
      </Link>
    </EditBtnBox>
  );
}

export default IdEditGear;
