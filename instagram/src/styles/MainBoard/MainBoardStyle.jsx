import styled from "@emotion/styled";

export const BoardsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
`;

export const BoardsWrap = styled.div`
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  margin-top: 16px;
  width: 500px;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 8px;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
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
`;

export const LikeWrap = styled.div`
  margin-left: 12px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const LikeText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const FooterContainer = styled.div`
  
`;

export const NicknameAndContent = styled.div`
  margin-left: 12px;
  display: flex;
  width: 100%;
`;

export const ContentsNickname = styled.p`
  margin: 8px 8px 0px 0px;
  font-size: 14px;
  font-weight: 700;
`;

export const Content = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;

export const CommentsAllView = styled.button`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.fontGrey};
  &:hover {
    cursor: pointer;
  }
`;

export const Comments = styled.div`
  margin-top: 5px;
  font-size: 12px;
`;

export const Date = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.palette.fontGrey};
  margin: 6px 0px;
`;
