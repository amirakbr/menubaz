import { IFeedbackSummaryCardProps } from '../interface';

const FeedbackSummaryCard = ({ title, subtitle, summary, icon: Icon, bg = 'bg-white-200' }: IFeedbackSummaryCardProps) => {
	return (
		<div className={`xl:w-max flex items-center justify-between py-7 px-10 xl:py-4 xl:px-6 rounded-lg gap-8 ${bg}`}>
			<div>
				<p className='text-title text-base font-medium'>
					{title} <span className='text-complementary'>{summary}</span>
				</p>
				<p className='text-xs text-subtitle'>{subtitle}</p>
			</div>
			<div>
				<Icon
					width={40}
					height={40}
				/>
			</div>
		</div>
	);
};

export default FeedbackSummaryCard;
