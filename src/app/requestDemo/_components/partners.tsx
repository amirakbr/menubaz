import Image from 'next/image';

const Partners = () => {
	const businessPartners = [
		{
			imageSrc: '/partners/partner13.png',
		},
		{
			imageSrc: '/partners/partner14.png',
		},
		{
			imageSrc: '/partners/partner15.png',
		},
		{
			imageSrc: '/partners/partner16.png',
		},
		{
			imageSrc: '/partners/partner17.png',
		},
		{
			imageSrc: '/partners/partner18.png',
		},
	];
	return (
		<div className='py-8 px-5 rounded-lg bg-white-200 flex flex-col gap-4 items-center justify-center'>
			<p className='text-base font-medium flex gap-0.5'>
				<span className='text-complementary'>1000+</span>
				کسب و کار از
				<span className='text-complementary'>50+</span>
				شهر به منوباز اعتماد کرده‌اند
			</p>
			<div className='flex gap-2 items-center'>
				{businessPartners?.map(({ imageSrc }) => {
					return (
						<Image
							src={imageSrc}
							alt={`${imageSrc} partner business logo`}
							key={`${imageSrc} partner business logo`}
							height={40}
							width={40}
							className='rounded-full'
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Partners;
