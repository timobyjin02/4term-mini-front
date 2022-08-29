import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  margin-top: 68px;
  width: 600px;
  height: 830px;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
`;
export const Header = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  padding-left: 16px;
  width: 34px;
  &:hover {
    cursor: pointer;
  }
`;

export const UserId = styled.div`
  padding-left: 12px;
`;

export const Image = styled.div`
  // img
  width: 600px;
  height: 600px;
  background-color: green;
`;

export const Liked = styled.div`
  display: flex;
  padding-left: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const LikedText = styled.div`
  font-size: 13px;
  font-weight: 550;
`;

export const Comments = styled.div`
  padding-left: 16px;
`;

export const CommentsPost = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;

export const CommentsAllView = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #c7c7c7;
  &:hover {
    cursor: pointer;
  }
`;

export const CommentsText = styled.div`
  margin-top: 5px;
  font-size: 12px;
`;
