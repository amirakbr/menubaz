'use client';

import Input from '@/app/commonComponents/input/input';
import { useForm } from 'react-hook-form';
import { ISearchAreaForm } from '../interface';
import MagnifierIcon from '@/app/public/icons/magnfier';

const SearchField = () => {
	const { control } = useForm<ISearchAreaForm>({ defaultValues: { searchQuery: '' } });
	return (
		<div className='flex flex-col gap-7 text-right w-full sm:w-[400px]'>
			<p className='text-2xl text-title font-semibold'>
				سلام دوست عزیز
				<br></br> چطور میتونم،کمکت کنم؟
			</p>
			<div className='flex items-center bg-white-200 px-4 py-1.5 rounded-xl gap-4'>
				<div className='w-full'>
					<Input
						control={control}
						name='searchQuery'
						label=''
						placeholder='جستجو بین مقالات آموزشی...'
						inputClassName='placeholder-title-300 border-0 !bg-transparent'
					/>
				</div>
				<div className='shrink-0'>
					<MagnifierIcon />
				</div>
			</div>
		</div>
	);
};

export default SearchField;
