import styled from "@emotion/styled";

export const CommentsText = styled.div`
  padding-left: 12px;
  padding-bottom: 5px;
  margin-top: 5px;
  display: flex;
  font-size: 12px;
  .icon {
    margin-left: 10px;
    margin-right: 5px;
    width: 14px;
    height: 14px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Comment = styled.span`
  flex: 1;
  word-break: break-all;
  b {
    margin-right: 5px;
  }
`;
