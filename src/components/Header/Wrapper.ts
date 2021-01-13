import styled, { css } from "styled-components";

export const BackgroundImage = styled.img<{ canAnimate: boolean }>`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  transform: scale(1);
  ${({ canAnimate }) =>
    canAnimate &&
    css`
      transform: scale(1.2);
      transition: transform 5s linear;
    `}
`;

export const BackgroundOverlay = styled.div`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0.73;
  background-color: #ebe9f4;
  position: absolute;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default Wrapper;
