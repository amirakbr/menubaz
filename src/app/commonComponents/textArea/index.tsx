'use client';
import { Controller, FieldValues } from 'react-hook-form';
import { IInputProps } from '../input/interface';
import { TextareaAutosize } from '@mui/base';

const TextArea = <TData extends FieldValues>({ control, label, name, required = false, direction = 'rtl' }: IInputProps<TData>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => {
          return (
            <div className="flex flex-col gap-1">
              <label className={`flex gap-1 text-title-400 text-sm font-medium ${required ? 'after:block after:content-["*"]' : ''}`}>{label}</label>

              <TextareaAutosize
                onChange={onChange}
                value={value}
                maxRows={4}
                minRows={4}
                required={required}
                className={'h-[40px] !outline-0 bg-whiteBlack-100 rounded-lg border border-white-400 text-title !resize-none p-4'}
                dir={direction}
              />

              {error?.message ? <p className={'text-red-500'}>{error?.message}</p> : null}
            </div>
          );
        }}
      />
    </>
  );
};

export default TextArea;
