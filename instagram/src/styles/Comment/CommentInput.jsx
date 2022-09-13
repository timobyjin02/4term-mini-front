import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding-top: 10px; */
  .icon {
    margin-top: 5px;
  }
`

export const InputBox = styled.input`
  width: 100%;
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const CommentBtn = styled.button`
  width: 50px;
  font-size: 12px;
  color: ${({theme}) => theme.palette.commentBtn};
  &:active {
    color: ${({theme}) => theme.palette.commentBtnActive};
  }
`