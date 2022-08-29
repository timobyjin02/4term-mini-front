import styled from "@emotion/styled/";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
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

export const ImageWrap = styled.span`
  position: relative;
  margin-right: 28px;
  margin-bottom: 28px;

  :hover .imgHover {
    cursor: pointer;
    visibility: visible;
  }
`;
export const Image = styled.img(
  ({ theme }) =>
    `
    width: ${theme.sizes.explorePhotoBox};
    height: ${theme.sizes.explorePhotoBox};
    object-fit:cover;
      `
);

export const ImageHover = styled.div(
  ({ theme }) =>
    `
    position:absolute;
    top: 0;
    left:0;
    visibility: hidden;
        background-color : rgba(0,0,0, 0.3);
        width: ${theme.sizes.explorePhotoBox};
        height: ${theme.sizes.explorePhotoBox};
    `
);
