import styled from "styled-components";

import { flexColumn, flexRow, MainSubtitle } from "../../styles/helpers";

export const Title = styled.h3`
  color: #676483;
  font-size: 45px;
  font-weight: 400;
  font-family: "Caveat", cursive;
  letter-spacing: -0.3px;
`;

export const EventDate = styled.span`
  color: #7a7a7a;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  font-family: "Times New Roman", Sans-serif;
`;

export const AddressTitle = styled.span`
  color: #676483;
  font-size: 20px;
  margin-top: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 0.1px;
  font-family: "Times New Roman", Sans-serif;
`;

export const AddressValue = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: "Times New Roman", Sans-serif;
`;

export const CardItem = styled.div`
  ${flexColumn};
  flex: 1;
  justify-content: center;
`;

export const Card = styled.div`
  ${flexRow};
  width: 100%;
  margin: 35px auto 0;
  padding: 100px 0;
  max-width: 1140px;
  box-shadow: 0px 0px 44px -14px rgb(0 0 0 / 50%);
`;

const Wrapper = styled.section`
  ${flexColumn};
  padding: 100px 0;
  text-align: center;
  align-items: center;
  ${MainSubtitle} {
    margin-bottom: 13px;
  }
`;

export default Wrapper;
