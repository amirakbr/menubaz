import BikeIcon from '@/app/public/icons/bikeIcon';
import BoxTickIcon from '@/app/public/icons/boxTickIcon';
import TableServiceIcon from '@/app/public/icons/tableServiceIcon';
import { ITestimonialsData } from '../interface';

const testimonialsData: ITestimonialsData[] = [
  {
    title: 'سفارش بر روی میز',
    content: 'تجربه‌ی دلنشین غذاخوری با امکان سفارش‌گیری سریع و آسان از طریق QR.',
    icon: TableServiceIcon,
  },
  {
    title: 'تحویل حضوری',
    content: 'بیش از ظرفیت فیزیکی رستوران خود، به مشتریان خدمات دهید.',
    icon: BoxTickIcon,
  },
  {
    title: 'ارسال با پیک',
    content: 'با ارائه بهترین غذاها، در میان مشتریان محلی به شهرت برسید.',
    icon: BikeIcon,
  },
];

export default testimonialsData;
