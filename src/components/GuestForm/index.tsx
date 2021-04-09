import { FC } from "react";
import { Form } from "react-final-form";

import {
  SectionTitle,
  MainSubtitle,
  SecondarySubtitle,
} from "../../styles/helpers";

import Wrapper, {
  FormWrapper,
  SubmitButton,
  Content,
  Control,
} from "./Wrapper";
import { handleSubmit, email, required, composeValidators } from "./helpers";
import FieldControl from "./FieldControl";

const GuestForm: FC = () => (
  <Wrapper>
    <Content>
      <MainSubtitle>ТИ ЗАПРОШЕНИЙ</MainSubtitle>
      <SectionTitle>МИ НЕ МОЖЕМО ДОЧЕКАТИСЯ НА ТЕБЕ</SectionTitle>
      <SecondarySubtitle>БУДЬ-ЛАСКА ЗАЛИШИ ПОБАЖАННЯ =)</SecondarySubtitle>

      <Form onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <FieldControl
              name="name"
              placeholder="Ваше ім'я"
              validate={required}
            />
            <FieldControl
              name="email"
              placeholder="Електронна скринька"
              validate={composeValidators(required, email)}
            />

            <FieldControl
              name="wish"
              fieldType="textarea"
              placeholder="Побажання..."
              validate={required}
            />
            <SubmitButton type="submit">Відправити</SubmitButton>
          </FormWrapper>
        )}
      </Form>
    </Content>
  </Wrapper>
);

export default GuestForm;
