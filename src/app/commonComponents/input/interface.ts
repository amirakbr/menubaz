import { HTMLInputTypeAttribute } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

export interface IInputProps<TData extends FieldValues> {
  label: string;
  control: Control<TData>;
  name: Path<TData>;
  required?: boolean;
  direction?: 'rtl' | 'ltr';
  type?: HTMLInputTypeAttribute;
}
