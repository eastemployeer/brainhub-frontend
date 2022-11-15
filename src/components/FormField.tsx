import React, { ChangeEvent } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Form, FormFieldProps as BaseFormFieldProps } from "semantic-ui-react";

interface FormFieldProps extends BaseFormFieldProps  {
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
}

export default function FormField({ errors, register, onChange, name, label, type, ...rest }: FormFieldProps) {
  return (
    <Form.Field error={!!errors[name]?.message} {...rest} >
      <label>{label}</label>
      <input {...register(name)} onChange={onChange} type={type} />
      <ErrorMessage as="label" errors={errors} name={name} />
    </Form.Field>
  );
}
