import { IButtonProps } from './interface';

const Button = ({ color = 'primary', size = 'md', variant = 'solid', onClick, children, className }: IButtonProps) => {
  const sizeClassName = {
    sm: 'py-1 px-3',
    md: 'p-3',
    lg: '',
    xl: '',
    '2xl': '',
  };

  const variantClassName = {
    solid: 'border',
    bordered: 'border !bg-none',
    shadow: 'border shadow-sm',
    none: 'border shadow-0 ring-0',
  };

  const colorClassName = {
    primary: 'bg-blue-500 border-blue-500 shadow-blue-500 text-white',
    secondary: 'bg-black border-black shadow-black text-white',
  };

  return (
    <button onClick={onClick} className={`${sizeClassName[size]} ${variantClassName[variant]} ${colorClassName[color]} rounded-[8px] ${className}`}>
      {children}
    </button>
  );
};

export default Button;
