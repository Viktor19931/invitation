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
          <Title>Таїнство вінчання</Title>
          <EventDate>26/06/2021 13:45</EventDate>

          <AddressTitle>Адреса</AddressTitle>
          <EventDate>
            місто Львів, вул. Пасічна 83, <br />
            церква Благовіщення Пресвятої Богородиці
          </EventDate>
        </CardItem>
        <CardItem>
          <Title>Святковий бенкет</Title>
          <EventDate>26/06/2021 17:00</EventDate>

          <AddressTitle>Адреса</AddressTitle>
          <EventDate>
            місто Львів, вул. Медової Печери 65, <br />
            ресторан "Медова Печера"
          </EventDate>
        </CardItem>
      </Card>
    </Wrapper>
  );
};

export default Planning;
