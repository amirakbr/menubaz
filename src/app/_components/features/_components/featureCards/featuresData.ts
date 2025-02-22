import ReserveIcon from '@/app/public/icons/reserveIcon';
import { IFeatureData } from '../../interface';
import MonitOirMobileIcon from '@/app/public/icons/monitorMobileIcon';
import DocumentFilterIcon from '@/app/public/icons/documnetFilterIcon';
import PeopleIcon from '@/app/public/icons/peoplesIcon';
import HeadphoneIcon from '@/app/public/icons/headphoneIcon';

const featuresData: IFeatureData[] = [
  {
    title: 'نرم‌افزار صندوق و مدیریت',
    summary: 'آنلاین و در دسترس',
    description:
      'سیستم آنلاین ثبت سفارش منوباز به مشتریان این امکان را می‌دهد که بدون اتلاف وقت، تنها با تلفن همراه خود، سفارش‌هایشان را از هر جایی، چه از روی میز رستوران و چه از محل کار، به‌سادگی ثبت و پرداخت کنند.',
    icon: ReserveIcon,
  },
  {
    title: 'سیستم ثبت سفارش غذا',
    summary: 'بدون نیاز به نصب',
    description:
      'سیستم آنلاین ثبت سفارش منوباز به مشتریان این امکان را می‌دهد که بدون اتلاف وقت، تنها با تلفن همراه خود، سفارش‌هایشان را از هر جایی، چه از روی میز رستوران و چه از محل کار، به‌سادگی ثبت و پرداخت کنند.',
    icon: MonitOirMobileIcon,
  },
  {
    title: 'سایت و منو دیجیتال',
    summary: 'پنل مدیریت اختصاصی',
    description:
      'با منوی دیجیتال منوباز، کسب‌وکار خود را در گوگل معرفی کنید و به مشتریان این امکان را بدهید که از هرجا، به منوی به‌روز شده شما با تصاویر و قیمت‌ها دسترسی پیدا کنند و انتخابی راحت‌تر داشته باشند.',
    icon: DocumentFilterIcon,
  },
  {
    title: 'باشگاه مشتریان تخصصی',
    summary: 'یکپارچه و حرفه‌ای',
    description:
      'با ارسال پیامک‌های هوشمند، مشتریان وفادار بیشتری جذب کنید و با امکاناتی مانند تخفیف‌گذاری سه‌گانه، کیف پول الکترونیک و سیستم کش‌بک، آن‌ها را به خریدهای بیشتر تشویق کنید.',
    icon: PeopleIcon,
  },
  {
    title: 'پشتیبانی 7/24',
    summary: 'رایگان و همیشه در دسترس',
    description:
      'با منوباز، پشتیبانی همیشه در کنار شماست. از آموزش‌های تصویری رایگان و مرکز راهنمای جامع تا سرویس تیکتینگ و پشتیبانی تلفنی ۲۴ ساعته، همه ابزارها برای رفع مشکلات و پاسخ به سوالات شما آماده‌اند.',
    icon: HeadphoneIcon,
  },
];

export default featuresData;
