'use client';

import { Controller, FieldValues } from 'react-hook-form';
import { IInputProps } from './interface';
import { Field } from '@base-ui-components/react';
import { Option, Select as BaseSelect } from '@mui/base';

const Select = <TData extends FieldValues>({ control, label, name, required = false, direction = 'rtl', type = 'text' }: IInputProps<TData>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => {
          return (
            <Field.Root className={() => 'flex flex-col gap-1'}>
              <Field.Label
                className={() => {
                  return `flex gap-1 text-title-400 text-sm font-medium	 ${required ? 'after:block after:content-["*"]' : ''}`;
                }}
              >
                {label}
              </Field.Label>
              <BaseSelect
                value={value}
                onChange={onChange}
                className="h-[40px] !outline-0 bg-whiteBlack-100 rounded-lg border border-white-400 text-title"
              >
                <Option value={{ id: 45 }} />
              </BaseSelect>
              {error?.message ? <Field.Error className={() => 'text-red-500'}>{error?.message}</Field.Error> : null}
            </Field.Root>
          );
        }}
      />
    </>
  );
};

export default Select;
