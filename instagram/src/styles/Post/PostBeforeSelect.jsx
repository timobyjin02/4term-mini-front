import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 508px;
  height: 502px;
  justify-content: center;
  align-items: center;
`;

export const UploadImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.btn};
  height: 30px;
  padding: 5px 9px;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.backgroundWhite};
  font-size: 1em;
  cursor: pointer;
`;

export const InputFile = styled.input`
  display: none;
`;
