import Element2Icon from '@/app/public/icons/elemen2Icon';
import { ICategoryData } from '../interface';
import Setting2Icon from '@/app/public/icons/setting2';
import MessageTextIcon from '@/app/public/icons/messageText';
import PeopleIcon from '@/app/public/icons/peoplesIcon';
import HomeIcon from '@/app/public/icons/homeIcon';
import Grid6Icon from '@/app/public/icons/grid6Icon';
import UserSearchIcon from '@/app/public/icons/userSearchIcon';
import EditIcon from '@/app/public/icons/editIcon';
import LikeIcon from '@/app/public/icons/likeIcon';
import BagIcon from '@/app/public/icons/bagIcon';
import PrinterIcon from '@/app/public/icons/printerIcon';
import PercentageSquareIcon from '@/app/public/icons/percentageSquar';
import HeadPhoneIcon from '@/app/public/icons/headphone';
import Link from 'next/link';

export const categoryData: ICategoryData[] = [
	{
		label: 'داشبورد',
		name: 'dashboard',
		route: '/helpcenter/dashboard',
		Icon: Element2Icon,
		articleCount: 5,
	},
	{
		label: 'تنظیمات سفارش',
		name: 'ordersettings',
		route: '/helpcenter/ordersettings',
		Icon: Setting2Icon,
		articleCount: 5,
	},
	{
		label: 'ارسال پیام',
		name: 'sendmessage',
		route: '/helpcenter/sendmessage',
		Icon: MessageTextIcon,
		articleCount: 5,
	},
	{
		label: 'مدیریت کارکنان',
		name: 'staffmanagement',
		route: '/helpcenter/staffmanagement',
		Icon: PeopleIcon,
		articleCount: 5,
	},
	{
		label: 'ورورد به پنل',
		name: 'logintopanel',
		route: '/helpcenter/logintopanel',
		Icon: HomeIcon,
		articleCount: 5,
	},
	{
		label: 'منو',
		name: 'menu',
		route: '/helpcenter/menu',
		Icon: Grid6Icon,
		articleCount: 5,
		isUnique: true,
		additionalClassname: 'bg-gradient-to-r from-primary-500 to-white-200 from-[-5rem]',
	},
	{
		label: 'مدیریت مشتریان',
		name: 'customermanagement',
		route: '/helpcenter/customermanagement',
		Icon: UserSearchIcon,
		articleCount: 5,
		isUnique: true,
		additionalClassname: 'bg-gradient-to-l from-primary-500 to-white-200 from-[-5rem]',
	},
	{
		label: 'گزارش گیری',
		name: 'reporting',
		route: '/helpcenter/reporting',
		Icon: EditIcon,
		articleCount: 5,
	},
	{
		label: 'ثبت سفارش',
		name: 'orderregistration',
		route: '/helpcenter/orderregistration',
		Icon: LikeIcon,
		articleCount: 5,
	},
	{
		label: 'تنظیمات فروشگاه',
		name: 'storesettings',
		route: '/helpcenter/storesettings',
		Icon: BagIcon,
		articleCount: 5,
	},
	{
		label: 'تنظیمات چاپگر',
		name: 'printersettings',
		route: '/helpcenter/printersettings',
		Icon: PrinterIcon,
		articleCount: 5,
	},
	{
		label: 'تخفیف گذاری',
		name: 'discountmanagement',
		route: '/helpcenter/discountmanagement',
		Icon: PercentageSquareIcon,
		articleCount: 5,
	},
	{
		label: 'پشتیبانی',
		name: 'support',
		route: '/helpcenter/support',
		Icon: HeadPhoneIcon,
		articleCount: 5,
	},
];

const CategoryList = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 w-[812px]'>
			{categoryData?.map(({ Icon, articleCount, label, additionalClassname, isUnique, name, route }, index) => (
				<Link
					key={`category list ${index}`}
					href={route}
					about={name}>
					<div
						className={`flex items-center rounded-xl p-8 justify-between gap-2 ${additionalClassname ? additionalClassname : 'bg-white-200'} `}
						key={`category list ${index}`}>
						<div className='flex items-center gap-2'>
							<Icon
								height={24}
								width={24}
								primaryColor={isUnique ? '#262626' : '#595959'}
							/>
							<p className={`text-2xl ${isUnique ? 'font-semibold text-title' : 'text-title-400'}`}>{label}</p>
						</div>
						<p className={`text-base ${isUnique ? 'font-semibold text-title' : 'text-title-300'}`}>{articleCount} مقاله</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default CategoryList;
