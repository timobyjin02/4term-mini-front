import styled from "@emotion/styled";

export const EditBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const GearBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

export const EditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 94px;
  height: 30px;
  color: #262626;
  font-size: 14px;
  font-weight: 700;
`;

export const GearBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: ${({ theme }) => theme.palette.backgroundGrey};
`;

export const IdEditGearBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Nickname = styled.h2`
  font-size: 28px;
  font-weight: 200;
`;
