import SmsTracking from '@/app/public/icons/smsTracking';
import Link from 'next/link';

const Mailbox = () => {
	return (
		<>
			<div className='flex flex-col gap-5 items-start bg-white-200 rounded-lg px-5 py-7'>
				<SmsTracking />
				<div className='flex flex-col gap-3 w-full'>
					<p className='text-2xl font-bold text-title'>پست الکترونیک</p>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<p className='text-base font-medium text-title-400'>پشتیبانی</p>
							<Link
								href='mailto:support@menobuzz.com'
								className='text-complementary font-medium text-base'>
								support@menobuzz.com
							</Link>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-base font-medium text-title-400'>فروش</p>
							<Link
								href='mailto:sales@menobuzz.com'
								className='text-complementary font-medium text-lg'>
								sales@menobuzz.com
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Mailbox;
