import Button from '@/app/commonComponents/button';
import Image from 'next/image';

const BenefitsOfUse = () => {
  return (
    <div className="flex flex-col items-center text-center gap-8 max-w-[839px] mx-auto">
      <div className="flex flex-col gap-4">
        <p className="text-title font-bold text-2xl">مزایای استفاده</p>
        <p className="text-xl text-semibold text-subtitle-400">بیشترین امکانات با کمترین هزینه؛ حتی رایگان!</p>
        <p className="text-title font-medium">
          ایجاد حس امنیت و رعایت پروتوکل های بهداشتی به واسطه استفاده از منو دیجیتال، کاهش خطاهای انسانی و افزایش سرعت، صرفه جویی در هزینه چاپ و تغییر
          منو های فیزیکی، افزایش فروش و گردش سریع تر میزها، مدیریت و افزایش انعام های پرداختی، ساخت سریع و بدون نیاز به دانش فنی و گسترش کسب و کار
          شما، تنها گوشه ای از مزایای استفاده از منو دیجیتال است.
        </p>
      </div>
      <div className="relative w-full h-40 lg:h-64 bg-[url(/digitalMenu/benefitsChart.webp)] bg-contain bg-no-repeat bg-center"></div>
      <Button variant="secondary" className='w-full lg:w-max'>کسب اطلاعات بیشتر</Button>
    </div>
  );
};

export default BenefitsOfUse;
