'use client';
import { Field } from '@base-ui-components/react/field';
import { Controller, FieldValues } from 'react-hook-form';
import { TextareaAutosize } from '@mui/base';
import { IInputProps } from '../input/interface';

const TextArea = <TData extends FieldValues>({ control, label, name, required = false, direction = 'rtl' }: IInputProps<TData>) => {
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
                  return `flex gap-1 text-title-400 ${required ? 'after:block after:content-["*"]' : ''}`;
                }}
              >
                {label}
              </Field.Label>
              <TextareaAutosize
                onChange={onChange}
                value={value}
                maxRows={4}
                minRows={4}
                required={required}
                className={'h-[40px] !outline-0 bg-whiteBlack-100 rounded-lg border border-white-400 text-title !resize-none'}
                dir={direction}
              />
              {error?.message ? <Field.Error className={() => 'text-red-500'}>{error?.message}</Field.Error> : null}
            </Field.Root>
          );
        }}
      />
    </>
  );
};

export default TextArea;
