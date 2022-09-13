import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Post } from "../../assets/post.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { Wrap, ProfileImage } from "../../styles/Navigation/MenuStyle";
import PostModal from "../../pages/PostModal";
import { getUserNickname } from "../../utils/getToken";

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const nickname = getUserNickname();

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
      <Link to={`/${nickname}`}>
        <ProfileImage alt="profile image" src="/img/profile.png" />
      </Link>
    </Wrap>
  );
}

export default Menu;
