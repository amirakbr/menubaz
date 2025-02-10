import { IButtonProps } from './interface';

const Button = ({ color = 'primary', size = 'md', variant = 'solid', onClick, children }: IButtonProps) => {
	const sizeClassName = {
		'sm': 'py-1 px-3',
		'md': 'py-4 px-3',
		'lg': '',
		'xl': '',
		'2xl': '',
	};

	const variantClassName = {
		solid: 'border-1',
		bordered: 'border-1 !bg-none',
		shadow: 'border-1 shadow-sm',
		none: 'border-0 shadow-0 ring-0',
	};

	const colorClassName = { primary: 'bg-blue-500 border-blue-500 shadow-blue-500 text-white', secondary: 'bg-black border-black shadow-black text-white' };

	return (
		<button
			onClick={onClick}
			className={`${sizeClassName[size]} ${variantClassName[variant]} ${colorClassName[color]} rounded-[8px]`}>
			{children}
		</button>
	);
};

export default Button;
