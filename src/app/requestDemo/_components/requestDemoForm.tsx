'use client';

import Button from '@/app/commonComponents/button';
import Input from '@/app/commonComponents/input/input';
import { useForm } from 'react-hook-form';

const RequestDemoForm = () => {
	const { control } = useForm();
	return (
		<div className='bg-white-200 rounded-lg px-3 py-16 lg:px-12'>
			<div className='flex flex-col gap-4'>
				<h3 className='text-title font-semibold text-xl'>درخواست دمو</h3>
				<p className='text-subtitle text-sm'>فرم زیر را کامل کنید تا تیم فروش ما در زمان انتخابی با شما تماس بگیرند.</p>
				<div className='flex flex-col gap-5'>
					<Input
						label='نام و نام خانوادگی مدیریت'
						required
						control={control}
						name='ownerName'
					/>
					<Input
						label='شماره تماس'
						required
						control={control}
						name='phoneNumber'
						direction='ltr'
					/>

					<label
						htmlFor='businessName'
						className='flex flex-col gap-1'>
						<p className='text-title-400'>نوع کسب و کار *</p>
						<select
							name='businessName'
							className='h-[40px] !outline-0 bg-whiteBlack-100 rounded-lg border border-white-400 text-title'
							id='businessName'>
							<option value='coffeeShop'>کافی شاپ</option>
						</select>
					</label>
					<label
						htmlFor='suggestedTime'
						className='flex flex-col gap-1'>
						<p className='text-title-400'>زمان انتخابی جهت تماس کارشناسان ما با شما *</p>
						<select
							name='suggestedTime'
							className='h-[40px] !outline-0 bg-whiteBlack-100 rounded-lg border border-white-400 text-title'
							id='suggestedTime'>
							<option value='coffeeShop'>10 شب</option>
						</select>
					</label>
          <Button variant='secondary' className='self-start'>
            ارسال درخواست
          </Button>
				</div>
			</div>
		</div>
	);
};

export default RequestDemoForm;
