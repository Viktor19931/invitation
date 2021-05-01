import { FC } from "react";

import Wrapper, {
  Card,
  CardItem,
  Title,
  EventDate,
  AddressTitle,
} from "./Wrapper";
import { SectionTitle, MainSubtitle } from "../../styles/helpers";

const Planning: FC = () => {
  return (
    <Wrapper>
      <MainSubtitle>РОЗКЛАД</MainSubtitle>
      <SectionTitle>Де і Коли</SectionTitle>
      <Card>
        <CardItem>
          <Title>Церемонія вінчання</Title>
          <EventDate>30/07/2021 13:00</EventDate>

          <AddressTitle>Address</AddressTitle>
          <EventDate>
            Jl. Cempaka 2882, Tegalsari <br />
            Surabaya, Jawa Timur
          </EventDate>
        </CardItem>
        <CardItem>
          <Title>Святковий бенкет</Title>
          <EventDate>30/07/2021 17:00</EventDate>

          <AddressTitle>Address</AddressTitle>
          <EventDate>
            Jl. Mayjend Sungkono 212, <br />
            Surabaya, Jawa Timur
          </EventDate>
        </CardItem>
      </Card>
    </Wrapper>
  );
};

export default Planning;
