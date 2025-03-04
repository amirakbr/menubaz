import Flag2Icon from '@/app/public/icons/flag2';
import MagicStarIcon from '@/app/public/icons/magicStar';
import MedalIcon from '@/app/public/icons/medal';
import MonitorIcon from '@/app/public/icons/monitorIcon';

const historyTimeLine = [
	{
		date: '1401',
		summary:
			'منوباز فعالیت خود را در سال ۱۴۰۱ با تمرکز بر طراحی نرم‌افزار مدیریت رستوران آغاز کرد. با بررسی نیازهای بازار و مشاوره با متخصصان این صنعت، اولین نسخه نرم‌افزار تولید و به بازار عرضه شد که توانست پاسخگوی نیازهای اولیه کسب‌وکارهای غذایی باشد.',
		icon: Flag2Icon,
	},
	{
		date: '1402',
		summary:
			'در سال ۱۴۰۲، منوباز با استقبال بازار و رشد تقاضا برای محصول خود، بر بهبود و توسعه نرم‌افزار تمرکز کرد. این سال با راه‌اندازی واحد پشتیبانی تخصصی و اعمال تغییرات بر اساس بازخورد مشتریان، نقطه عطفی در ارائه خدمات بهتر و جلب رضایت کاربران بود.',
		icon: MonitorIcon,
	},
	{
		date: '1403',
		summary:
			'در سال ۱۴۰۳، منوباز با ارائه خدماتی نوآورانه و پاسخ به نیازهای پیشرفته‌تر مشتریان، توانست خود را به‌عنوان یکی از راهکارهای پیشرو در مدیریت رستوران‌ها مطرح کند. این پیشرفت باعث شد که منوباز در این حوزه جایگاه متمایزی پیدا کند و بیش از گذشته مورد اعتماد کسب‌وکارهای غذایی باشد.',
		icon: MedalIcon,
	},
	{
		date: '1404',
		summary:
			'منوباز با نگاه به آینده، همچنان بر نوآوری و توسعه مداوم تمرکز خواهد داشت. ما قصد داریم با بهره‌گیری از فناوری‌های پیشرفته و درک عمیق از نیازهای بازار، ابزارهایی برای مدیریت بهتر و رشد کسب‌وکارها ارائه دهیم. هدف ما این است که همچنان به‌عنوان یک همراه مطمئن، نقش موثری در موفقیت مشتریان خود ایفا کنیم.',
		icon: MagicStarIcon,
	},
];

const HistoryTimeLine = () => {
	return (
		<div className='flex flex-col items-center'>
			{historyTimeLine?.map(({ date, icon: Icon, summary }, index) => {
				return (
					<div
						className='flex flex-col max-w-96'
						key={`history timeline card ${index}`}>
						<div className='h-32 relative'>
							<div className='absolute top-0 h-full left-1/2 -translate-x-1/2 border-l border-dashed'></div>
							<div
								className={`left-1/2 absolute -translate-x-1/2 ${
									index === 0 ? 'top-0' : 'top-1/2 -translate-y-1/2'
								} p-2.5 rounded-full bg-[#FFFFFF] border border-black-300 hover:p-5 hover:bg-primary group transition-all`}>
								<div className='w-7 h-7 group-hover:w-8 group-hover:h-8 text-gray-400 flex items-center justify-center group-hover:text-gray-600 transition-all'>
									<Icon
										width={'inherit'}
										height={'inherit'}
										primaryColor='currentColor'
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center rounded-lg bg-white-200 h-[230px] px-2 py-7 jusify-center'>
							<div className='flex flex-col gap-1'>
								<p className='text-complementary font-semibold text-xl'>{date}</p>
								<p className='text-subtitle text-base'> {summary}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default HistoryTimeLine;
