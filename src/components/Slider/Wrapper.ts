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
  position: absolute;
  background-color: #ebe9f4;
`;

export const Title = styled.h1`
  margin: 0;
  color: #676483;
  font-size: 104px;
  font-weight: 400;
  font-family: "Alex Brush", Sans-serif;
`;

export const Subtitle = styled.p`
  color: #7a7a7a;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 6px;
  letter-spacing: 6.2px;
  text-transform: uppercase;
  font-family: "Roboto", Sans-serif;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 3;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default Wrapper;
