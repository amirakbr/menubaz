export type ISize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IVariant = 'solid' | 'bordered' | 'shadow' | 'none';
export type IColor = 'primary' | 'secondary';
export interface IIConProps {
  width?: number | string ;
  height?: number | string ;
  primaryColor?: string;
  secondaryColor?: string;
}
