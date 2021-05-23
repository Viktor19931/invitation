import { FormApi } from "final-form";
import axios from "axios";

type GuestFormFields = {
  name: string;
  wish: string;
  email: string;
};

type HandleSubmitProps = {
  values: GuestFormFields;
  form: FormApi<GuestFormFields>;
};

export const handleSubmit =
  (onSubmitSuccess: () => void) =>
  (
    values: GuestFormFields,
    { resetFieldState, reset }: FormApi<GuestFormFields>
  ) =>
    axios
      .post(
        "https://sheet.best/api/sheets/39588945-8961-4981-865a-984a9e025910",
        values
      )
      .then(() => {
        onSubmitSuccess();
        resetFieldState("name");
        resetFieldState("email");
        resetFieldState("wish");
        reset();
      });

const isEmail = (value?: string) => value && /^.+@.+\..+$/.test(value);

export const email = (value: string) =>
  !value || isEmail(value) ? undefined : "Не вірна електронна адреса";

export const required = (value?: string) =>
  value ? undefined : "oбов'язкове поле";

export const composeValidators =
  (...validators: ((value: any) => any)[]) =>
  (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
