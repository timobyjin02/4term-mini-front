import React from 'react'
import styled from '@emotion/styled';
import { ReactComponent as Likes } from "../assets/likes.svg";
import { ReactComponent as Comments } from "../assets/comments.svg";
import { ReactComponent as DM } from "../assets/dm.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";


function CardMenu() {
  return (
    <DivCardMenu>
        <DivInteractions>
            <Likes class="icon" />
            <Comments class="icon" />
            <DM class="icon" />
        </DivInteractions>
        <Bookmark class="icon" />
    </DivCardMenu>
  )
}

export default CardMenu;

const DivCardMenu = styled.div`
    width: 600px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      margin-right: 1em;
      width: 23px;
      height: 23px;

      &:hover {
      cursor: pointer;
    }
    }
`
const DivInteractions = styled.div`
    width: 112px;
    height: 52px;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
