import FeedbackSummaryCard from '@/app/_components/feedback/_components/feedbackSummaryBadgeCard';
import ClockIcon from '@/app/public/icons/clockIcon';
import FiveStarsIcon from '@/app/public/icons/fiveStartsIcon';
import GraphIcon from '@/app/public/icons/graphIcon';
import ShoppingCartIcon from '@/app/public/icons/shoppingCartIcon';

const Testimonial = () => {
	return (
		<div className='flex flex-col gap-10 mt-48'>
			<div className='flex flex-col gap-10 text-center'>
				<div className='max-w-[551px] flex flex-col gap-8 m-auto'>
					<h4 className='font-semibold text-title text-2xl'>مجموعه‌های برتر منوباز را انتخاب می‌کنند!</h4>
					<p className='text-subtitle-400 text-xl'>
						منوباز انتخاب بیش از <span className='text-complementary'>1000+</span> کافه و رستوران در <span className='text-complementary'>50+</span> شهر ایران است. با منوباز، همه‌چیز را از سفارش‌ها و
						انبار گرفته تا باشگاه مشتریان و منوی دیجیتال، یکپارچه و از هرجا مدیریت کنید.
					</p>
				</div>
				<div className='flex flex-col gap-5 items-center bg-white-200 rounded-lg p-10 max-w-[785] m-auto'>
					<FiveStarsIcon />
					<span className='font-bold text-base rounded-3xl ltr drop-shadow-primary bg-[#FFFFFF] py-3 px-4'>4.8 / 5</span>
					<p>
						قبل از منوباز، مدیریت رستوران برام یه کابوس بود! سفارش‌ها قاطی می‌شد، حسابداری همیشه عقب می‌افتاد، انبار رو هم که دیگه نگم... اما با منوباز همه چی عوض شد. الان فقط با یه کلیک همه چیز رو
						تحت کنترل دارم، انگار یه دستیار حرفه‌ای کنارمه!
					</p>
					<div className='max-w-[280px] lg:max-w-none grid grid-cols-1 w-full xl:w-max lg:grid-cols-[auto_auto_auto]'>
						<FeedbackSummaryCard
							icon={ShoppingCartIcon}
							subtitle={'حجم سفارشات'}
							summary={'۲۰%'}
							title={'افزایش'}
							bg='bg-[#FFFFFF]'
						/>
						<FeedbackSummaryCard
							icon={GraphIcon}
							subtitle={'در هزینه‌های جاری'}
							summary={'۳۷%'}
							title={'صرفه جویی'}
							bg='bg-[#FFFFFF] !rounded-none'
						/>
						<FeedbackSummaryCard
							icon={ClockIcon}
							subtitle={'زمان تحویل سفارش'}
							summary={'۱۵ دقیقه‌ای'}
							title={'کاهش'}
							bg='bg-[#FFFFFF] !rounded-t-none'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
