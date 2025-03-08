'use client';

import CloseCircle from '@/app/public/icons/closeCircle';
import Message2Icon from '@/app/public/icons/message-2';
import WhatsAppIcon from '@/app/public/icons/whatsapp';
import { useState } from 'react';

const SocialLinkQuickMessage = () => {
	const [isSocialLinkOpen, setIsSocialLinkOpen] = useState(false);
	return (
		<div className='fixed bottom-8 right-2 lg:right-8 z-[+10000]'>
			<div
				className='w-max h-max p-2 rounded-full bg-primary'
				onClick={() => {
					setIsSocialLinkOpen(!isSocialLinkOpen);
				}}>
				{isSocialLinkOpen ? (
					<CloseCircle
						width={28}
						height={28}
					/>
				) : (
					<Message2Icon
						width={28}
						height={28}
						primaryColor='#595959'
						secondaryColor='#595959'
					/>
				)}
			</div>
			{isSocialLinkOpen ? (
				<div className='absolute -left-52 -top-7 flex flex-col gap-2'>
					<div className='flex items-center gap-4 py-2 rounded-lg text-title bg-white-300 px-4'>
						<WhatsAppIcon
							height={24}
							width={24}
						/>
						<span>پاسخگویی واتساپ</span>
					</div>
					<div className='flex items-center gap-4 py-2 rounded-lg text-title bg-white-300 px-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 16 16'>
							<path
								fill='#2F2F2F'
								d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m2.544 12.122a.565.565 0 0 1-.802.281L7.57 10.716l-1.394 1.286a.24.24 0 0 1-.228.03l.268-2.39.008.007.006-.047s3.908-3.558 4.067-3.71c.161-.151.108-.184.108-.184.009-.184-.29 0-.29 0L4.939 9.039 2.78 8.305s-.331-.119-.362-.38c-.033-.26.373-.4.373-.4l8.574-3.406s.704-.314.704.206z'></path>
						</svg>
						<span>پاسخگویی تلگرام</span>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default SocialLinkQuickMessage;
