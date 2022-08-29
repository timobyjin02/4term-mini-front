import styled from "@emotion/styled";

export const ProfileEditItemBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ProfileEditInputBox = styled.div`
  width: 355px;
`;

export const ProfileEditItemName = styled.aside`
  width: 194px;
  display: flex;
  justify-content: center;
`;

export const ProfileEditItem = styled.label`
  width: 130px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
`;

export const ProfileEditItemInput = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 16px;
  &:focus {
    border: 2px solid #262626;
  }
  &.default {
    height: 33px;
  }
  &.higher {
    height: 75px;
    vertical-align: top;
    line-height: 20px;
  }
`;

export const EditGender = styled.select`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 16px;
`;
