import { FC, useState, useEffect, useCallback } from "react";
import { Form } from "react-final-form";

import { SectionTitle } from "../../styles/helpers";
import { useSuccessMessage } from "./hooks";

import Wrapper, {
  FormWrapper,
  SubmitButton,
  Content,
  MessageContainer,
} from "./Wrapper";
import { handleSubmit, email, required } from "./helpers";
import FieldControl from "./FieldControl";

const GuestForm: FC = () => {
  const [showSuccessMessage, onSubmitSuccess] = useSuccessMessage();

  return (
    <Wrapper>
      <Content>
        <SectionTitle>
          Сім'я - це і є те, заради чого просинатись кожен день, дихати кожну
          секунду і молити Бога кожну мить, щоб він її оберігав і захищав
        </SectionTitle>

        <Form onSubmit={handleSubmit(onSubmitSuccess)}>
          {({ handleSubmit, pristine, submitting }) => (
            <FormWrapper onSubmit={handleSubmit}>
              <FieldControl
                name="name"
                placeholder="Ваше ім'я"
                validate={required}
              />
              <FieldControl
                name="email"
                placeholder="Електронна скринька"
                validate={email}
              />

              <FieldControl
                name="wish"
                fieldType="textarea"
                placeholder="Побажання..."
                validate={required}
              />
              <SubmitButton type="submit" disabled={submitting || pristine}>
                Відправити
              </SubmitButton>
              {showSuccessMessage && (
                <MessageContainer>Дякуємо за повідомлення!</MessageContainer>
              )}
            </FormWrapper>
          )}
        </Form>
      </Content>
    </Wrapper>
  );
};

export default GuestForm;
