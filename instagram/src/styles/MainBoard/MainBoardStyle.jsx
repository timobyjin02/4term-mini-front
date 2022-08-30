import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.div`
  margin-top: 68px;
  width: 500px;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 8px;
`;
export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderGrey};
`;

export const ProfileImage = styled.img`
  padding-left: 16px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const UserId = styled.p`
  padding-left: 12px;
`;

export const Image = styled.img`
  // img
  width: 100%;
  height: fit-content;
  object-fit: cover;
  /* background-color: green; */
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
