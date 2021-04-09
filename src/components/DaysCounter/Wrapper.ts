import styled from "styled-components";

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

export const CellWrapper = styled.div`
  display: flex;
  margin: 0 10px;
  min-width: 195px;
  min-height: 195px;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  border: 3px solid #b3b1c6;
  padding: 31px 0px 43px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Wrapper;
