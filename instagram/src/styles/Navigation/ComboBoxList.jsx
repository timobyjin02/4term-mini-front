import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: white;
  z-index: 999;
  border: 1px solid #f7f7f7;
  box-shadow: 0 2px 1px 0px rgba(0, 0, 0, .08);
  width: 100%;
`;

export const List = styled.ul`
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  transition: all 0.25s;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
  span {
    display: inline-block;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 10px;
    margin-left: 10px;
  }
`;