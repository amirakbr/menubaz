import { IIConProps } from '@/app/commonComponents/commonInterface';

const Flag2Icon = ({ height = 32, width = 32, primaryColor = '#828282' }: IIConProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill='none'
			viewBox='0 0 32 32'>
			<path
				fill={primaryColor}
				d='M8.598 30.333c-.547 0-1-.453-1-1V2.667c0-.547.453-1 1-1s1 .453 1 1v26.666c0 .547-.454 1-1 1'></path>
			<path
				fill={primaryColor}
				d='M9.265 23.667c-.373 0-.72-.2-.893-.56a1 1 0 0 1 .453-1.334l11.067-5.466c1.627-.84 2.547-1.854 2.507-2.8-.04-.92-1.027-1.867-2.72-2.587l-10.8-4.667a1.01 1.01 0 0 1-.534-1.32 1 1 0 0 1 1.32-.52l10.8 4.667c3.334 1.413 3.894 3.333 3.934 4.347.066 1.773-1.214 3.426-3.6 4.653l-11.08 5.48a.94.94 0 0 1-.454.107'></path>
		</svg>
	);
};

export default Flag2Icon;
