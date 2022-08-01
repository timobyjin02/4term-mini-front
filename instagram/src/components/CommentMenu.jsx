import React from "react";
import { CardMenu, Interactions } from "../styles/CommentMenu_style";
import { ReactComponent as Likes } from "../assets/likes.svg";
import { ReactComponent as Comments } from "../assets/comments.svg";
import { ReactComponent as DM } from "../assets/dm.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";

function CommentMenu() {
  return (
    <CardMenu>
      <Interactions>
        <Likes class="icon" />
        <Comments class="icon" />
        <DM class="icon" />
      </Interactions>
      <Bookmark class="icon" />
    </CardMenu>
  );
}

export default CommentMenu;
