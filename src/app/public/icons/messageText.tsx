import { IIConProps } from '@/app/commonComponents/commonInterface';

const MessageTextIcon = ({ height = 24, width = 24 }: IIConProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill='none'
			viewBox='0 0 24 24'>
			<path
				fill='#595959'
				d='M12 22.81c-.69 0-1.34-.35-1.8-.96l-1.5-2a.5.5 0 0 0-.2-.1H8c-4.17 0-6.75-1.13-6.75-6.75V8c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v5c0 4.42-2.33 6.75-6.75 6.75h-.5c-.08 0-.15.04-.2.1l-1.5 2c-.46.61-1.11.96-1.8.96M8 2.75C4.42 2.75 2.75 4.42 2.75 8v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.09.29 1.4.7l1.5 2c.35.46.85.46 1.2 0l1.5-2c.33-.44.85-.7 1.4-.7h.5c3.58 0 5.25-1.67 5.25-5.25V8c0-3.58-1.67-5.25-5.25-5.25z'></path>
			<path
				fill='#595959'
				d='M17 8.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75M13 13.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75'></path>
		</svg>
	);
};

export default MessageTextIcon;
