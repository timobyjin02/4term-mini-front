import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Frame = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 997;
  transition: all 0.25s;

  ${props =>
    props.modalToggle
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Contents = styled.div`
  position: absolute;
  margin: auto;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  z-index: 999;
`;

export const Item = styled.button`
  width: 100%;
  height: 40px;
  color: red;
  font-size: 12px;
  font-weight: bold;
`;
