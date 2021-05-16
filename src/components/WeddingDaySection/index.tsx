import { FC } from "react";

import DaysCounter from "../DaysCounter";
import Wrapper, { SubTitle, Title } from "./Wrapper";

const WeddingDaySection: FC = () => (
  <Wrapper>
    <Title as="h2">
      День весілля <br /> 26 червня 2021р.
    </Title>
    <SubTitle>До весілля залишилося</SubTitle>
    <DaysCounter />
  </Wrapper>
);

export default WeddingDaySection;
