'use client';

import { Controller, FieldValues } from 'react-hook-form';
import { ISelectProps } from './interface';
import { Autocomplete, MenuItem, Select as SL } from '@mui/material';
import CloseIcon from '@/app/public/icons/closeIcon';
import ArrowDownIcon from '@/app/public/icons/arrowDownIcon';

const Select = <TData extends FieldValues, TOp extends Object>({
  control,
  label,
  name,
  required = false,
  options,
  getOption,
  getValue,
}: ISelectProps<TData, TOp>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => {
          return (
            <div className={'flex flex-col gap-1'}>
              <label className={`flex gap-1 text-title-400 text-sm font-medium	 ${required ? 'after:block after:content-["*"]' : ''}`}>{label}</label>
              <SL
                dir="rtl"
                error={invalid}
                className="h-[40px] !rounded-lg !outline-0 bg-whiteBlack-100 text-title"
                value={value}
                onChange={onChange}
                defaultValue={''}
                variant="outlined"
                IconComponent={() => (
                  <span className="ml-4">
                    <ArrowDownIcon />
                  </span>
                )}
              >
                {options?.map((option) => (
                  <MenuItem key={`select option ${Math.random()}`} value={getValue(option)}>
                    {getOption(option)}
                  </MenuItem>
                ))}
              </SL>
              {error?.message ? <span className={'text-red-500'}>{error?.message}</span> : null}
            </div>
          );
        }}
      />
    </>
  );
};

export default Select;
