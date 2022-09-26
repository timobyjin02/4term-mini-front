import styled from '@emotion/styled';

export const LoginBtn = styled.button`
  width: 268px;
  height: 30px;
  margin-top: 6px;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.btn};
  color: ${({ theme }) => theme.palette.backgroundWhite};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    color: #cecece;
  }
`;
