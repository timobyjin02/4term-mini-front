import styled from "@emotion/styled";

export const ModalBackground = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.modalBackground};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  width: 400px;
  height: 222px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border-radius: 12px;
`;

export const PicUploadBtn = styled.label`
  width: 400px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.palette.borderGrey};
  margin-top: 16px;
  color: #0095f6;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const InputPicChange = styled.input`
  display: none;
`;

export const PicDeleteBtn = styled.button`
  width: 400px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.palette.borderGrey};
  color: #ed4956;
  font-weight: 600;
  font-size: 14px;
`;

export const CancelBtn = styled.button`
  width: 400px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.palette.borderGrey};
  color: #262626;
  font-size: 14px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeadText = styled.h3`
  margin: 32px 32px 16px;
  font-size: 18px;
  font-weight: 550;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 160px;
  display: flex;
  flex-direction: column;
`;
