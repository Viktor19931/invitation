import { FormApi } from "final-form";
import axios from "axios";

type GuestFormFields = {
  name: string;
  wish: string;
  email: string;
};

export const handleSubmit = (
  values: GuestFormFields,
  form: FormApi<GuestFormFields>
) => {
  axios.post(
    "https://sheet.best/api/sheets/39588945-8961-4981-865a-984a9e025910",
    values
  );

  form.reset();
};

const isEmail = (email: string) => /^.+@.+\..+$/.test(email);

export const email = (value: string) =>
  isEmail(value) ? undefined : "Не вірна електронна адреса";

export const required = (value?: string) =>
  value ? undefined : "oбов'язкове поле";

export const composeValidators = (...validators: ((value: any) => any)[]) => (
  value: any
) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
