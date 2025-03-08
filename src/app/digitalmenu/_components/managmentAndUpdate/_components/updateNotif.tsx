import Image from 'next/image';

const UpdateNotification = () => {
	return (
		<div className='h-[300px] relative w-full lg:max-w-[412px] overflow-hidden'>
			<Image
				fill
				alt='update notification'
				src={'/digitalmenu/updateNotification.png'}
                    className='object-contain object-center'
			/>
		</div>
	);
};

export default UpdateNotification;
