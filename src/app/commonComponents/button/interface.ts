import { ReactNode } from 'react';
import { IColor, ISize, IVariant } from '../commonInterface';

export interface IButtonProps {
	size?: ISize;
	color?: IColor;
	variant?: IVariant;
	onClick?: () => void;
	children: ReactNode;
}
