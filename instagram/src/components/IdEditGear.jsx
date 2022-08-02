import styled from "@emotion/styled";
import { ReactComponent as Gearicon } from "../assets/gearicon.svg";
import { Link } from "react-router-dom";

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
      <EditBtn>
        <StyledLink to="/accounts/edit">프로필 편집</StyledLink>
      </EditBtn>
    </EditBtnBox>
  );
}

const EditBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const GearBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const EditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 94px;
  height: 30px;
  color: #262626;
`;

const GearBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: ${({ theme }) => theme.palette.backgroundGrey};
`;

const IdEditGearBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Nickname = styled.h2`
  font-size: 28px;
  font-weight: 200;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  &:active {
    color: ${({ theme }) => theme.palette.fontBlack};
  }
`;

export default IdEditGear;
