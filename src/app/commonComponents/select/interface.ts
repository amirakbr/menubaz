import { Control, FieldValues, Path } from "react-hook-form";

export interface ISelectProps<TData extends FieldValues> {
    control:Control<TData>,
    name:Path<TData>
}