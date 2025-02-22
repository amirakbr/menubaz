import { IFeatureCardProps, IFeatureData } from '../../interface';

export const FeatureCard = ({ description, summary, title, icon: Icon }: IFeatureData) => {
	console.log(Icon, 'adsij');

	return (
		<div className='flex flex-col items-center text-center bg-white-200 p-6 rounded-xl gap-2'>
			{/* <div className="text-yellow-500 text-4xl mb-4">{icon}</div> */}
			<div>
				<div>
					<h3 className='text-lg font-medium text-title'>{title}</h3>
					<p className='text-gray-500 text-sm text-subtitle-400'>{summary}</p>
				</div>
				
			</div>
			<p className='text-gray-600 text-sm'>{description}</p>
		</div>
	);
};
