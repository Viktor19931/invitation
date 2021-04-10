import { FC } from "react";

import DaysCounter from "../DaysCounter";
import Wrapper, { SubTitle, Title } from "./Wrapper";

const WeddingDaySection: FC = () => (
  <Wrapper>
    <SubTitle>День весілля</SubTitle>
    <Title as="h2">Ми одружуємось</Title>
    <DaysCounter />
  </Wrapper>
);

export default WeddingDaySection;
