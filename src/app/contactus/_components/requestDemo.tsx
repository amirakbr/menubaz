import Button from '@/app/commonComponents/button';
import Image from 'next/image';

const RequestDemo = () => {
	const businessPartners = [
		{
			imageSrc: '/partners/partner1.png',
		},
		{
			imageSrc: '/partners/partner7.png',
		},
		{
			imageSrc: '/partners/partner3.png',
		},
		{
			imageSrc: '/partners/partner4.png',
		},
		{
			imageSrc: '/partners/partner5.png',
		},
		{
			imageSrc: '/partners/partner8.png',
		},
	];
	return (
		<>
			<div className='bg-white-200 rounded-lg py-10 pr-10 pl-14'>
				<div className='flex flex-col gap-2 items-start max-w-[307]'>
					<h3 className='font-bold text-xl text-title xl:text-2xl'>درخواست دمو</h3>
					<h4 className='text-sm text-subtitle xl:text-base'>برای دریافت دمو و مشاوره رایگان درباره منوباز، فرم مقابل را تکمیل نمایید. همکاران ما در سریع‌ترین زمان ممکن با شما تماس بگیرند.</h4>
					<Button
						size='small'
						variant='secondary'>
						ثبت درخواست
					</Button>
					<p className='text-xs font-medium flex gap-0.5'>
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
			</div>
		</>
	);
};

export default RequestDemo;
