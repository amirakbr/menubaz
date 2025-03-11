import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

interface IButtonProps extends MUIButtonProps {
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<IButtonProps> = ({ size = 'medium', variant = 'contained', children, ...props }) => {
  return (
    <MUIButton
      {...props}
      size={size} // MUI handles padding and font-size internally
    >
      {children}
    </MUIButton>
  );
};

export default Button;
