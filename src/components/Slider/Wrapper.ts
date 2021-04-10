import styled, { css } from "styled-components";

import { flexColumn, SectionTitle, MainSubtitle } from "../../styles/helpers";

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

export const Title = styled(SectionTitle)`
  font-size: 104px;
  font-family: "Alex Brush", Sans-serif;
`;

export const Subtitle = styled(MainSubtitle)`
  color: #7a7a7a;
  font-size: 17px;
  margin-bottom: 6px;
  text-transform: uppercase;
`;

export const Content = styled.div`
  ${flexColumn};
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default Wrapper;
