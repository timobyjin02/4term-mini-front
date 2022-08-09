import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Post } from "../assets/post.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { Wrap, ProfileImage } from "../styles/Navigation/MenuStyle";
import PostModal from "../pages/PostModal";

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  // setShowModal(closed);
  return (
    <Wrap>
      <Link to="/main">
        <Home className="icon" />
      </Link>
      <Post onClick={openModal} className="icon" />
      {showModal ? <PostModal setShowModal={setShowModal} /> : null}
      <Link to="/explore">
        <Notification className="icon" />
      </Link>
      <Link to="/username">
        <ProfileImage alt="profile image" src="img/profile.png" />
      </Link>
    </Wrap>
  );
}

export default Menu;
