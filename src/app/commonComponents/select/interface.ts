import { Control, FieldValues, Path } from 'react-hook-form';

export interface ISelectProps<TData extends FieldValues, TOp extends Object> {
  control: Control<TData>;
  name: Path<TData>;
  required?: boolean;
  label: string;
  options: TOp[];
  getOption: (props: TOp) => string;
  getValue: (props: TOp) => string;
}
