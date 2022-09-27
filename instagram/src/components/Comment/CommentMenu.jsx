import { CardMenu, Interactions } from "../../styles/MainBoard/CommentMenuStyle";
import { ReactComponent as Likes } from "../../assets/likes.svg";
import { ReactComponent as Comments } from "../../assets/comments.svg";
import { ReactComponent as DM } from "../../assets/dm.svg";
import { ReactComponent as Bookmark } from "../../assets/bookmark.svg";

function CommentMenu() {
  return (
    <CardMenu>
      <Interactions>
        <Likes className="icon" />
        <Comments className="icon" />
        <DM className="icon" />
      </Interactions>
      <Bookmark className="icon" />
    </CardMenu>
  );
}

export default CommentMenu;
