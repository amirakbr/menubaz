import { ButtonProps as MuiButtonProps } from '@mui/base';

export interface IButtonProps extends MuiButtonProps {
  className?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'outline' | 'none';
}
