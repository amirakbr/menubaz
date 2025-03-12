import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

interface IButtonProps extends MUIButtonProps {
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<IButtonProps> = ({ size = 'medium', children, ...props }) => {
  return (
    <MUIButton {...props} size={size}>
      {children}
    </MUIButton>
  );
};

export default Button;
