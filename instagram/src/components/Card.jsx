import styled from "@emotion/styled";
// import { injectGlobal } from "@emotion/css";
import React from 'react';
import CardMenu from "./CardMenu"

function Card() {
  return (
    <DivCard>
        <DivHeader>
          <ProfileImage alt="profile image" src="img/profile.png" />
          <DivUserId>ujin</DivUserId>
        </DivHeader>
        <DivImage></DivImage>
        <CardMenu />
        <DivLiked>
          <DivLikedText>좋아요 4개</DivLikedText>
        </DivLiked>
        <DivComments>
          <DivCommentsPost>내가 쓴 글</DivCommentsPost>
          <DivCommentsAllView>댓글 모두 보기</DivCommentsAllView>
          <DivCommentsText>댓글들 보임</DivCommentsText>
        </DivComments>
    </DivCard>
  )
}

export default Card;

const DivCard = styled.div`
  margin-top: 68px;
  width: 600px;
  height: 830px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey };
`
const DivHeader = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
  align-items: center;
`
const ProfileImage = styled.img `
    padding-left: 16px;
    width: 34px;
    &:hover {
        cursor: pointer;
    }
`
const DivUserId = styled.div`
  padding-left: 12px;
`
const DivImage = styled.div` // img
  width: 600px;
  height: 600px;
  background-color: green;
`
const DivLiked = styled.div`
  display: flex;
  padding-left: 16px;
  &:hover {
        cursor: pointer;
    }
`
const DivLikedText = styled.div`
  font-size: 13px;
  font-weight: 550;
`
const DivComments = styled.div`
  padding-left: 16px;
`
const DivCommentsPost = styled.div`
  margin-top: 8px;
  font-size: 13px;
`
const DivCommentsAllView = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #c7c7c7;
  &:hover {
        cursor: pointer;
    }
`
const DivCommentsText = styled.div`
  margin-top: 5px;
  font-size: 12px;
`