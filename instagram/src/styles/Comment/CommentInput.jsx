import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`

export const InputBox = styled.input`
  width: 100%;
  padding-left: 12px;
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