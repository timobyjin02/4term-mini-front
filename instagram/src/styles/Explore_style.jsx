import styled from "@emotion/styled/";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 24px 20px 0px;
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 984px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
`;

export const ImageBox = styled.div`
  display: flex;
`;

export const Image = styled.div(
  ({ theme }) =>
    `
    width: ${theme.sizes.explorePhotoBox};
    height: ${theme.sizes.explorePhotoBox};
    background-color: ${theme.palette.fontGrey};
    margin-right: 28px;
    margin-bottom: 28px;
  `
);
