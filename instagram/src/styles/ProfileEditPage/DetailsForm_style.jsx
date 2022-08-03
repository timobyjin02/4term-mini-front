import styled from "@emotion/styled";

export const ItemForm = styled.form`
  width: 700px;
  height: 597px;
  margin: 16px 0;
`;

export const SubmitBtn = styled.div`
  width: 48px;
  height: 30px;
  margin-left: 194px;
  background-color: ${({ theme }) => theme.palette.btn};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  &:active {
    background-color: ${({ theme }) => theme.palette.btnHover};
  }
`;
