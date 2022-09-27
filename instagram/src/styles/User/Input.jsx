import styled from '@emotion/styled';

export const LoginInputText = styled.input`
  box-sizing: border-box;
  width: 268px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  outline: none;
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 11px 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
