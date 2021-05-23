import styled, { css } from "styled-components";

import {
  flexColumn,
  SectionTitle,
  MainSubtitle,
  media,
} from "../../styles/helpers";

export const BackgroundImage = styled.img<{ canAnimate: boolean }>`
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  height: 100vh;
  opacity: 0.73;
  position: absolute;
  background-color: #ebe9f4;
`;

export const Title = styled(SectionTitle)`
  font-size: 104px;
  text-align: center;
`;

export const GuestNameTitle = styled(Title)`
  font-size: 80px;
`;

export const Subtitle = styled(MainSubtitle)`
  color: #171516;
  font-size: 17px;
  margin: 16px 0 6px 0;
  text-transform: uppercase;
`;

const wrapperOnMobile = media.phone`
  ${Title} {
    font-size: 60px;
    text-align: center;
  }
  img {
    object-fit: cover;
  }
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
  ${wrapperOnMobile};
`;

export default Wrapper;
