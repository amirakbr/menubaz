'use client';

import Button from '@/app/commonComponents/button';
import Input from '@/app/commonComponents/input/input';
import Select from '@/app/commonComponents/select';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const { control } = useForm();
	return (
		<div className='xl:max-w-[636px] max-h-[580px] rounded-lg bg-white-200 p-10'>
			<div className='flex flex-col gap-10'>
				<div className='flex flex-col gap-4'>
					<p className='text-bse font-semibold xl:text-xl text-title'>مشاوره رایگان</p>
					<p className='text-xs xl:text-sm text-subtitle-400'>انتخاب یک نرم‌افزار جدید همیشه چالش‌برانگیز بوده؛ ما با افتخار اینجا هستیم تا به شما کمک کنیم بهترین را انتخاب کنید.</p>
				</div>
				<div className='flex flex-col gap-5'>
					<Input
						name='firstName'
						control={control}
						label='نام و نام خانوادگی'
						required
					/>
					<Input
						name='phoneNumber'
						control={control}
						label='شماره تلفن همراه'
						required
						type='number'
					/>
					<Input
						name='complexName'
						control={control}
						label='نام مجموعه'
						required
						type='number'
					/>

					<Select
						control={control}
						name='businessType'
						options={[{ label: 'فست فود', value: 'fastfood' }]}
						getOption={({ label }) => label}
						getValue={({ value }) => value}
						label='کسب و کار'
						required
					/>
				</div>
				<Button
					variant='secondary'
					className='w-max'
					size='small'>
					ثبت درخواست
				</Button>
			</div>
		</div>
	);
};

export default ContactForm;
