'use client';

import ArrowDownIcon from '@/app/public/icons/arrowDownIcon';
import { Accordion } from '@base-ui-components/react';

const faqQuestion = [
	{
		question: 'آیا سیستم مدیریت پیک منوباز به نقشه فارسی و مسیریابی مجهز است؟',
		answer: 'آیا سیستم مدیریت پیک منوباز به نقشه فارسی و مسیریابی مجهز است؟',
	},
	{
		question: 'نرم‌افزار کافی‌شاپ چیست؟',
		answer: 'نرم‌افزار کافی‌شاپ چیست؟',
	},
	{
		question: 'چگونه می‌توانیم نرم افزار کافی‌شاپی منوباز را دریافت کنیم؟',
		answer: 'چگونه می‌توانیم نرم افزار کافی‌شاپی منوباز را دریافت کنیم؟',
	},
	{
		question: 'آموزش منوباز به چه صورت است؟',
		answer: 'آموزش منوباز به چه صورت است؟',
	},
];

const FAQ = () => {
	return (
		<div className='flex flex-col gap-5 items-center'>
			<p className='text-title text-3xl font-bold text-center'>
			سوالات متداول
			</p>
			<p className='text-xl text-subtitle-400 text-center'>
			پاسخ به سوالات متداول در مورد اپلیکیشن ما را بخوانید
			</p>
			<Accordion.Root
				dir='rtl'
				className={() => 'flex flex-col gap-2 w-[960px]'}>
				{faqQuestion?.map(({ answer, question }) => (
					<Accordion.Item
						className={({ open }) => {
							return `${open ? 'bg-white-300 rounded-xl p-2' : ''}`;
						}}>
						<Accordion.Header>
							<Accordion.Trigger
								className={({ open }) => {
									return `w-full flex items-center justify-between ${open ? '[&>div]:rotate-180 [&>div]:bg-white-600 ' : ''}`;
								}}>
								<p className='py-2 px-3 text-xs text-start font-semibold text-title'>{question}</p>
								<div className={`transition-all w-6 h-6 rounded-full shrink-0 flex items-center justify-center`}>
									<ArrowDownIcon
										width={12}
										height={12}
									/>
								</div>
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Panel className={() => 'p-2 text-subtitle text-sm'}>{answer}</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</div>
	);
};

export default FAQ;
