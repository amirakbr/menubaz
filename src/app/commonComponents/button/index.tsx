import { Button as BTN } from '@mui/base';
import { clsx } from 'clsx';
import { IButtonProps } from './interface';

const Button: React.FC<IButtonProps> = ({ children, size = 'medium', variant = 'primary', className, ...props }) => {
  const baseClasses = 'font-bold rounded-lg transition-all focus:ring disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-7 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-primary text-black hover:bg-yellow-500 focus:ring-primary-300',
    secondary: 'bg-gray text-white border border-black-100 hover:bg-gray-800 focus:ring-gray-400',
    ghost: 'border border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-100 hover:border-yellow-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300',
    outline: 'border border-black-100 text-gray-700 bg-transparent hover:border-black hover:text-black',
    none: '',
  };

  return (
    <BTN className={clsx(baseClasses, sizeClasses[size], variantStyles[variant], className)} {...props}>
      {children}
    </BTN>
  );
};

export default Button;
