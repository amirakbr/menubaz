import Button from '@/app/commonComponents/button';
import TickIcon from '@/app/public/icons/tick';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 gap-4 items-center justify-center px-4">
      <div className="flex items-center justify-center p-4 bg-white-200 rounded-xl">
        <Image alt="laptop image with menubaz logo" src={'/hero/hero.png'} width={400} height={300} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">
          منو باز ، بهترین نرم افزار رستوران، <span className="text-complementary">کافی شاپ و فست فود</span>
        </h1>
        <h2 className="text-subtitle text-base text-center">
          منوباز یک نرم‌افزار جامع و یکپارچه برای مدیریت کامل رستوران، فست‌فود و کافی شاپ است که با امکاناتی نظیر مدیریت سفارشات و موجودی،حسابداری و
          گزارش های مالی و ...، تمامی نیازهای شما را پوشش می دهد و شما را از استفاده از سایر نرم افزارها بی نیاز می کند.
        </h2>
        <Button size="medium" className="bg-gray border-gray" variant="secondary">
          ثبت نام و دریافت فوری
        </Button>
        <Button size="medium" className="bg-transparent text-black border-gray" variant="outline">
          مشاهده تعرفه و امکانات
        </Button>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className='h-5 w-5'>
          <TickIcon width={20} height={20} />
          </span>
          <p>7 روز ضمانت بازگشت وجه</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
