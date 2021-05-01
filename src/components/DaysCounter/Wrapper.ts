import styled from "styled-components";

import { flexColumn, flexRow, media } from "../../styles/helpers";

export const TimeTitle = styled.span`
  color: #676483;
  font-size: 69px;
  font-weight: 400;
  line-height: 1.4em;
  font-family: "Times New Roman", Sans-serif;
`;

export const TimeSubtitle = styled.span`
  color: #676483;
  font-size: 11px;
  font-weight: 400;
  line-height: 1em;
  font-style: normal;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const cellWrapperOnMobile = media.phone`
  margin: 0 3px;
  min-width: 83px;
  min-height: 122px;
  ${TimeTitle} {
    font-size: 34px;
  }
  ${TimeSubtitle} {
    font-size: 8px;
  }
`;

export const CellWrapper = styled.div`
  ${flexColumn}
  margin: 0 10px;
  min-width: 195px;
  min-height: 195px;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border: 3px solid #b3b1c6;
  padding: 31px 0px 43px 0px;
  ${cellWrapperOnMobile};
`;

const Wrapper = styled.div`
  ${flexRow};
`;

export default Wrapper;
