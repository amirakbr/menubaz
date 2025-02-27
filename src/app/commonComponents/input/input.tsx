"use client";
import { Field } from "@base-ui-components/react/field";

const Input = () => {
  return (
    <>
      <Field.Root>
        <Field.Label>Name</Field.Label>
        <Field.Control
          onChange={({ target }) => {
            console.log([target?.value]);
          }}
        />

        <Field.Error>Please enter your name</Field.Error>

        <Field.Description>Visible on your profile</Field.Description>
      </Field.Root>
    </>
  );
};

export default Input;
