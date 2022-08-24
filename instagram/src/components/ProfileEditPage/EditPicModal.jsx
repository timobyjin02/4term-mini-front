import {
  ModalBackground,
  Modal,
  ModalHeader,
  HeadText,
  PicUploadBtn,
  PicDeleteBtn,
  CancelBtn,
  ModalContent,
  InputPicChange,
} from "../../styles/ProfileEditPage/EditPicModalStyle";

function EditPicModal({ setShowModal, onUploadPic, deletePic }) {
  return (
    <ModalBackground>
      <Modal>
        <ModalHeader>
          <HeadText>프로필 사진 바꾸기</HeadText>
        </ModalHeader>
        <ModalContent>
          <PicUploadBtn>
            사진 업로드
            <InputPicChange
              onChange={onUploadPic}
              type={"file"}
              accept={"image/*"}
            />
          </PicUploadBtn>
          <PicDeleteBtn onClick={deletePic}>현재 사진 삭제</PicDeleteBtn>
          <CancelBtn onClick={() => setShowModal(false)}>취소</CancelBtn>
        </ModalContent>
      </Modal>
    </ModalBackground>
  );
}

export default EditPicModal;
