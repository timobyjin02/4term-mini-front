import styled from "@emotion/styled";
import { ReactComponent as Home } from "../assets/home.svg"
import { ReactComponent as Post } from "../assets/post.svg"
import { ReactComponent as Notification } from "../assets/notification.svg"

function Menu() {
    return(
        <DivMenu>
            <Home className="icon" />
            <Post className="icon" />
            <Notification className="icon" />
            <ProfileImage alt="profile image" src="img/profile.png"/>
        </DivMenu>
    );
}

export default Menu;

const DivMenu = styled.div `
    display: flex;
    padding-right: 1.5em;
    .icon {
        margin-right: 1.5em;
        width: 24px;
        height: 24px;
    }
    .icon:hover {
        cursor: pointer;
    }
`
const ProfileImage = styled.img `
    padding: 0 1 rem;
    width: 24px;
    &:hover {
        cursor: pointer;
    }
`