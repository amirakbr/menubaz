import { ITabProps } from '@/app/digitalmenu/interface';

const HorizontalTab = ({ selectedTabIndex }: ITabProps) => {
	return (
		<>
			{selectedTabIndex !== undefined ? (
				<div className='w-max relative flex items-center  lg:h-full lg:w-1'>
					{/* line */}
					<span className='w-32 h-1 bg-white-300 lg:w-1 lg:rounded-full lg:h-full'></span>

					{/* filledLine */}
					<span className='absolute top-0 right-0 h-1 lg:w-1 lg:rounded-full bg-primary animate-filledLine lg:animate-filledHeight'></span>

					{/* first dot */}
					<span className='w-3 h-3 bg-primary absolute top-1/2 right-0 bg-primary -translate-y-1/2 rounded-full lg:top-0 lg:-left-0 lg:right-[unset] lg:w-10 lg:h-10 lg:-translate-x-1/2'></span>
					{/* second dot */}
					<span className={`w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all lg:-left-0 lg:w-10 lg:h-10 ${selectedTabIndex === 1 ? 'bg-primary' : 'bg-white-300'}`}></span>
				</div>
			) : null}
		</>
	);
};

export default HorizontalTab;
