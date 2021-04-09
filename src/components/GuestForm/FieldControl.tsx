import { FC } from "react";
import { Field } from "react-final-form";

import { Control } from "./Wrapper";

type FieldControlProps = {
  name: string;
  placeholder: string;
  fieldType?: "input" | "textarea";
  validate?(v?: string): string | undefined;
};

const FieldControl: FC<FieldControlProps> = ({
  name,
  validate,
  placeholder,
  fieldType = "input",
}) => (
  <Field {...{ name, validate }}>
    {({ input, meta }) => (
      <Control>
        {fieldType === "input" ? (
          <input {...{ ...input, placeholder }} type="text" />
        ) : (
          <textarea {...{ ...input, placeholder }} />
        )}
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </Control>
    )}
  </Field>
);

export default FieldControl;
