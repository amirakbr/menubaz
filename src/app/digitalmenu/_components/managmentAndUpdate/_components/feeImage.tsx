import Image from 'next/image';

const FeeImage = () => {
	return (
		<div className='h-[300px] relative w-full overflow-hidden order-2 lg:order-1 lg:w-[400px] lg:h-[350px] '>
			<Image
				fill
				alt='update notification'
				src={'/digitalmenu/pricing.png'}
				className='object-contain object-center lg:object-cover'
			/>
		</div>
	);
};

export default FeeImage;
