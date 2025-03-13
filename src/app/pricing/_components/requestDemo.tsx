import Button from '@/app/commonComponents/button';
import HighlightText from '@/app/commonComponents/highliter';
import Image from 'next/image';

const RequestDemo = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 py-12 lg:py-7 lg:px-10 bg-gradient-to-t from-[#f7f7f7CC] to-whiteBlack-100/0 rounded-xl justify-between">
      <div className="text-center lg:text-right flex flex-col items-center lg:items-start gap-8 max-w-[607px] lg:gap-10 lg:justify-center">
        <div className="flex flex-col gap-4">
          <p className="text-2xl xl:text-3xl font-bold text-title">
            <HighlightText keyword="منوباز" text="منوباز یک نرم‌افزار جامع و یکپارچه برای مدیریت کامل رستوران، فست‌فود و کافی شاپ است" />
          </p>
          <p className="text-base text-subtitle xl:text-xl">
            که با امکاناتی نظیر مدیریت سفارشات و موجودی،حسابداری و گزارش‌های مالی و ...، تمامی نیازهای شما را پوشش می‌دهد و شما را از استفاده از سایر
            نرم افزارها بی نیاز می‌کند.
          </p>
        </div>
        <Button className="mx-2" variant="contained" color="secondary">
          درخواست دمو
        </Button>
      </div>
      <div className="w-full lg:w-[386px] lg:h-[308px] h-[244px] relative rounded-xl overflow-hidden">
        <Image fill src={'/pricingpage/ceo_typing.webp'} alt="ceo typing with black suit" className="object-center object-cover" />
      </div>
    </div>
  );
};

export default RequestDemo;
