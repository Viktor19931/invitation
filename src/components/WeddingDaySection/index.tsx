import { FC } from "react";

import DaysCounter from "../DaysCounter";
import Wrapper, { SubTitle, Title } from "./Wrapper";

const WeddingDaySection: FC = () => (
  <Wrapper>
    <SubTitle>WEDDING DAY</SubTitle>
    <Title>We Are Getting Married</Title>
    <DaysCounter />
  </Wrapper>
);

export default WeddingDaySection;