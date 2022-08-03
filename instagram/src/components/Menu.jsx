import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Post } from "../assets/post.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { DivMenu, ProfileImage } from "../styles/Menu_Style";

function Menu() {
  return (
    <DivMenu>
      <Home className="icon" />
      <Post className="icon" />
      <Link to="/explore">
        <Notification className="icon" />
      </Link>
      <Link to="/username">
        <ProfileImage alt="profile image" src="img/profile.png" />
      </Link>
    </DivMenu>
  );
}

export default Menu;
