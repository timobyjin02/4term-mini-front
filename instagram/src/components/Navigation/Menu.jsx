import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Wrap, ProfileImage } from "../../styles/Navigation/MenuStyle";
import { getUserNickname, getUserNo } from "../../utils/getToken";
import PostModal from "../../pages/PostModal";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Post } from "../../assets/post.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";

function Menu() {
  const nickname = getUserNickname();
  // modal for post
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  // profileImg
  const [myProfileImg, setMyProfileImg] = useState({
    isProfileImg: false,
    profileImg: "",
  });

  const getMyProfileImg = async () => {
    const userNo = getUserNo();
    const URL = `${process.env.REACT_APP_URL}user/profileImg/${userNo}`;
    const res = await axios.get(URL);

    if (res.data.isProfileImg) {
      setMyProfileImg(res.data);
    } else {
      setMyProfileImg({ isProfileImg: false, profileImg: "/img/profile.png" });
    }
  };

  useEffect(() => {
    getMyProfileImg();
  }, []);
  return (
    <Wrap>
      <Link to="/main">
        <Home className="icon" />
      </Link>
      <Post onClick={openModal} className="icon" />
      {showModal ? (
        <PostModal
          setShowModal={setShowModal}
          myProfileImg={myProfileImg.profileImg}
        />
      ) : null}
      <Link to="/explore">
        <Notification className="icon" />
      </Link>
      <Link to={`/${nickname}`}>
        <ProfileImage
          alt="profile image"
          src={myProfileImg.profileImg || "img/profile.png"}
        />
      </Link>
    </Wrap>
  );
}

export default Menu;
