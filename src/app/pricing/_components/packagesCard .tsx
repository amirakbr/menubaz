'use client';

import { useState } from 'react';
import GroupButton from './groupButton';
import { thousandSeparator } from '@/app/tools';
import Button from '@/app/commonComponents/button';
import TickIcon from '@/app/public/icons/tick';
import ArrowDown from '@/app/public/icons/arrowDown';

const cardData = [
  {
    isSpecial: false,
    title: 'منو دیداری',
    subtitle: 'منوی دیجیتال حرفه‌ای با پنل اختصاصی',
    price: '960000',
    off: '20',
    actualPrice: '768000',
    featureTitle: 'ویژگی‌هایی که خواهید داشت:',
    feature: [
      { label: 'منو آنلاین با آدرس اختصاصی' },
      { label: 'ایجاد منوهای مجزا برای سرویس های داخلی، بیرون‌بر و دلیوری' },
      { label: 'امکان درج عکس و توضیحات برای محصولات' },
      { label: 'دسته بندی آیتم‌های منو' },
      { label: 'زمانبندی برای نمایش یک دسته مانند صبحانه' },
      { label: 'درج ساعات کاری به تفکیک ایام هفته' },
      { label: 'نمایش لوگو، توضیحات و شبکه‌های اجتماعی' },
      { label: 'پنل اختصاصی برای تغییر و بروزرسانی منو' },
      { label: 'نمایش سایت رستوران در گوگل' },
      { label: 'دسترسی به منو از طریق qr کد اختصاصی' },
    ],
  },
  {
    isSpecial: false,
    title: 'پایه',
    subtitle: 'سیستم مدیریت و سفارش‌گیری هوشمند',
    price: '5760000',
    off: '20',
    actualPrice: '4608000',
    featureTitle: 'تمام امکانات منو دیداری به همراه:',
    feature: [
      { label: 'سیستم حسابداری و فروش هوشمند' },
      { label: 'سیستم ثبت سفارش آنلاین' },
      { label: 'ایجاد انواع گزارش‌های مالی و آماری' },
      { label: 'مدیریت پیک همراه با پنل اختصاصی' },
      { label: 'باشگاه مشتریان با قابلیت ارسال پیامک هوشمند' },
      { label: 'سیستم ایجاد کدهای تخفیف هوشمند و شرطی' },
      { label: 'ثبت خودکار اطلاعات مشتریان' },
      { label: 'سفارش گیر گارسون' },
      { label: 'امکان ایجاد بی نهایت چاپگر' },
    ],
  },
  {
    isSpecial: true,
    title: 'استاندارد',
    subtitle: 'پرداخت آنلاین و سامانه ارسال سفارش و پیک',
    price: '13680000',
    off: '20',
    actualPrice: '10944000',
    featureTitle: 'تمامی امکانات پلن پایه به همراه:',
    feature: [
      { label: 'درگاه پرداخت آنلاین اختصاصی' },
      { label: 'پشتیبانی از پرداخت اعتباری' },
      { label: 'قابلیت پرداخت انعام' },
      { label: 'امکان ایجاد تخفیف داینامیک' },
      { label: 'کیف پول الکترونیک' },
      { label: 'هزینه پیک داینامیک' },
      { label: 'امکان افزودن و ویرایش مشتریان به صورت گروهی' },
      { label: 'مشاهده آیتم‌های محبوب هر مشتری' },
      { label: 'شمارنده سفارش' },
    ],
  },
  {
    isSpecial: false,
    title: 'استاندارد',
    subtitle: 'پرداخت آنلاین و سامانه ارسال سفارش و پیک',
    price: '21600000',
    off: '20',
    actualPrice: '17280000',
    featureTitle: 'تمامی امکانات پلن استاندارد به همراه:',
    feature: [
      { label: 'قابلیت چند شعبگی' },
      { label: 'اختصاص ضریب شارژ به مشتریان' },
      { label: 'سیستم کش بک' },
      { label: 'انبارداری هوشمند' },
      { label: 'امکان ارسال پیامک‌های شرطی و خودکار' },
      { label: 'قابلیت ایجاد کارت هدیه' },
      { label: 'سیستم رزرواسیون' },
      { label: 'پرداخت دونگی' },
      { label: 'سیستم نظرسنجی مشتریان' },
    ],
  },
];

const PackagesCard = () => {
  const [selectedButton, setSelectedButton] = useState('yearly');
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1 items-center">
        {selectedButton === 'yearly' ? <p className="text-xs font-semibold text-complementary animate-appear">20% تخفیف سالانه</p> : null}
        <GroupButton selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cardData?.map(({ actualPrice, feature, isSpecial, off, price, subtitle, title, featureTitle }, index) => {
          return (
            <div
              className={`bg-whiteBlack-100 border ${isSpecial ? 'border-primary' : 'border-white-600'} rounded-xl overflow-hidden`}
              key={`packages card ${index}`}
            >
              <div className={`p-5 flex flex-col gap-5 ${!isSpecial ? 'bg-white-200' : 'bg-gradient-to-t from-primary/0 to-primary'}`}>
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-title font-semibold xl:text-2xl">{title}</p>
                  <p className="text-subtitle text-sm">{subtitle}</p>
                </div>
                <div className="flex flex-col gap-2">
                  {selectedButton === 'yearly' ? (
                    <div className="flex items-center gap-2">
                      <del className="text-subtitle-300 text-xl">
                        <span className="text-xl text-subtitle-300">{thousandSeparator(price)}</span>{' '}
                      </del>
                      <span className="text-whiteBlack-100 rounded-xl bg-complementary px-2 py-0.5">%{off}</span>
                    </div>
                  ) : null}
                  <p>
                    <span className="text-2xl text-title font-medium">{thousandSeparator(selectedButton === 'yearly' ? actualPrice : price)}</span>{' '}
                    <span className="text-base font-normal text-title">تومان</span>
                  </p>
                </div>
                <Button variant={isSpecial ? 'secondary' : 'outline'}>شروع کنید</Button>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <p className="font-medium text-sm text-title">{featureTitle}</p>
                <div className="flex flex-col gap-1">
                  {feature?.map(({ label }, featureIndex) => (
                    <div className="flex items-center gap-1" key={`package feature ${featureIndex} ${index}`}>
                      <span className="w-3 h-3 rounded-full bg-primary-300 flex items-center justify-center">
                        <TickIcon width={5.48} height={4.08} primaryColor="#332C07" />
                      </span>
                      <p className="text-xs text-title-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 justify-center text-center">
        <span className="text-xs font-medium text-title">مقایسه را ببینید</span>
        <span className="animate-bounce">
          <ArrowDown />
        </span>
      </div>
    </div>
  );
};

export default PackagesCard;
