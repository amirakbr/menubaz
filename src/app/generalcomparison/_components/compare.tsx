'use client'

import Button from '@/app/commonComponents/button';
import { useState } from 'react';

const compareData = [
	{
		label: 'باشگاه مشتریان',
		name: 'customerClub',
	},
	{
		label: 'انبار داری',
		name: 'warehouse',
	},
	{
		label: 'منودیجیتال و سفارش گیری ',
		name: 'digitalMenu',
	},
	{
		label: 'مدیریت و حسابداری',
		name: 'accountant',
	},
];

const Compare = () => {
	const [compare, setCompare] = useState(compareData?.[0]?.name);
	return (
		<div>
			<h3 className='text-3xl text-title font-semibold'>مقایسه کنید</h3>
			<div className='flex items-center gap-1 p-2 rounded-xl bg-white-200 w-max m-auto'>
				{compareData?.map(({ label, name }) => (
					<Button
						size='small'
						variant={compare === name ? `secondary` : 'none'}
						onClick={() => {
							if (compare !== name) {
								setCompare?.(name);
							}
						}}
						key={`feature ${name}`}>
						<p
							className={`flex flex-col relative text-xs xl:text-sm ${
								compare === name ? 'after:content-[" "] after:w-4 after:border-b after:border-b-primary after:top-[1px] after:relative' : 'text-title-400'
							}`}>
							{label}
						</p>
					</Button>
				))}
			</div>
		</div>
	);
};

export default Compare;
