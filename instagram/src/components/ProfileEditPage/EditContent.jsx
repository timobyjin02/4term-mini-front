import EditProfilePic from "./EditProfilePic";
import DetailsForm from "./DetailsForm";
import { Content } from "../../styles/ProfileEditPage/EditContent_style";

function EditContent() {
  return (
    <Content>
      <EditProfilePic />
      <DetailsForm />
    </Content>
  );
}

export default EditContent;
