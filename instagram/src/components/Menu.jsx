import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Post } from "../assets/post.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { DivMenu, ProfileImage } from "../styles/Menu_Style";

function Menu() {
  return (
    <DivMenu>
      <Home className="icon" />
      <Post className="icon" />
      <Notification className="icon" />
      <ProfileImage alt="profile image" src="img/profile.png" />
    </DivMenu>
  );
}

export default Menu;
