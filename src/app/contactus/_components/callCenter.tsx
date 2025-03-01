import { tellPhone } from '@/app/constant/commonInfo';
import PhoneCallingIcon from '@/app/public/icons/phoneCalingIcon';
import Link from 'next/link';

const CallCenter = () => {
	return (
		<div className='flex flex-col gap-5 items-start bg-white-200 rounded-lg px-5 py-7'>
			<PhoneCallingIcon />
			<div className='flex flex-col gap-3 w-full'>
				<p className='text-2xl font-bold text-title'>اطلاعات تماس</p>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<p className='text-base font-medium text-title-400'>تلفن گویا</p>
						<Link
							href={`tel:${tellPhone}`}
							className='text-complementary underline font-medium text-lg ltr'>
							{tellPhone}
						</Link>
					</div>
					<div className='flex items-center justify-between'>
						<p className='text-base font-medium text-title-400'>شماره همراه</p>
						<Link
							href='tel:09926070508'
							className='text-complementary underline font-medium text-lg ltr'>
							0992 607 0508
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CallCenter;
