import { IIConProps } from '@/app/commonComponents/commonInterface';

const MonitorIcon = ({ height = 32, width = 32, primaryColor = '#828282' }: IIConProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill='none'
			viewBox='0 0 32 32'>
			<path
				fill={primaryColor}
				d='M23.415 23.96H8.588c-5.307 0-6.92-1.614-6.92-6.92V8.587c0-5.307 1.613-6.92 6.92-6.92h14.813c5.307 0 6.92 1.613 6.92 6.92v8.44c.014 5.32-1.6 6.933-6.906 6.933M8.588 3.667c-4.187 0-4.92.733-4.92 4.92v8.44c0 4.186.733 4.92 4.92 4.92h14.813c4.187 0 4.92-.734 4.92-4.92v-8.44c0-4.187-.733-4.92-4.92-4.92z'></path>
			<path
				fill={primaryColor}
				d='M16 30.334c-.547 0-1-.453-1-1V22.96c0-.546.453-1 1-1s1 .454 1 1v6.374c0 .547-.453 1-1 1M29.335 18.334H2.668c-.547 0-1-.454-1-1 0-.547.453-1 1-1h26.667c.546 0 1 .453 1 1s-.454 1-1 1'></path>
			<path
				fill={primaryColor}
				d='M22 30.334H10c-.547 0-1-.454-1-1 0-.547.453-1 1-1h12c.547 0 1 .453 1 1s-.453 1-1 1'></path>
		</svg>
	);
};

export default MonitorIcon;
