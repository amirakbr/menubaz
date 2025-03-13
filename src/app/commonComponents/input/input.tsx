'use client';

import { Controller, FieldValues } from 'react-hook-form';
import { IInputProps } from './interface';
import { Input as Inp } from '@mui/material';

const Input = <TData extends FieldValues>({
  control,
  label,
  name,
  required = false,
  direction = 'rtl',
  type = 'text',
  placeholder = '',
  inputClassName = '',
}: IInputProps<TData>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => {
          return (
            <div className={'flex flex-col gap-1'}>
              {label ? (
                <label className={`flex gap-1 text-title-400 text-sm font-medium	 ${required ? 'after:block after:content-["*"]' : ''}`}>
                  {label}
                </label>
              ) : null}
              <Inp
                classes={{
                  root: 'before:!hidden after:!hidden',
                }}
                onChange={onChange}
                value={value}
                required={required}
                className={`h-[40px] px-4 !outline-0 bg-whiteBlack-100 rounded-lg border border-white-400 text-title ${inputClassName}`}
                dir={direction}
                type={type}
                placeholder={placeholder}
              />
              {error?.message ? <span className={'text-red-500'}>{error?.message}</span> : null}
            </div>
          );
        }}
      />
    </>
  );
};

export default Input;
