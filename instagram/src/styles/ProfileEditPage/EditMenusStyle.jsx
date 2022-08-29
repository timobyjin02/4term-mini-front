import styled from "@emotion/styled";

export const EditMenu = styled.ul`
  width: 235px;
  height: 597px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border-right: 1px solid ${({ theme }) => theme.palette.borderGrey};
`;

export const MenuList = styled.li`
  width: 235px;
  height: 52px;
  padding: 16px 16px 16px 30px;
  border-left: 2px solid #262626;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.fontBlack};
`;
