import styled from "styled-components";

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  color: #ebe9f4;
  font-size: 16px;
  min-height: 120px;
  align-items: center;
  justify-content: center;
  background-color: #676483;
`;

export const SocialMediaBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InstaIcon = styled.i`
  color: #676483;
  width: 1em;
  height: 1em;
  position: relative;
  display: block;
  font-family: "Font Awesome 5 Brands";
  &:before {
    content: "\f16d";
  }
`;

export const FbIcon = styled.i`
  color: #676483;
  font-family: "Font Awesome 5 Brands";
  &:before {
    content: "\f09a";
    /* position: absolute; */
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;

export const InfoSection = styled.div``;

const Wrapper = styled.div``;

export default Wrapper;
