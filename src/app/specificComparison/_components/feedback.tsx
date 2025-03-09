import HighlightText from '@/app/commonComponents/highliter';
import Image from 'next/image';

const Feedback = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="text-center flex flex-col gap-4 max-w-[714px]">
        <p className="text-title text-3xl font-bold ">همه چیز سپدز می تواند، به علاوه آنچه که نمی تواند!</p>
        <p className="text-base font-medium text-subtitle-400">
          فرم‌های زیبای سپیدز به‌ علاوه تجزیه و تحلیل‌های مبتنی بر هوش مصنوعی، امنیت در سطح سازمانی، دامنه‌های سفارشی نامحدود، سازنده داشبورد با
          گزینه‌های مختلف نمایش داده را دریافت کنید - همه با قیمت بهتر.
        </p>
      </div>
      <div className="grid grid-cols-[auto_auto] gap-4">
        <div className='relative -top-5 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:border-l before:border-l-white-600 before:z-[-1] z-[+1] before:-bottom-2'>
          <Image width={48} height={48} className="rounded-full" alt="avatar" src={'/partners/partner5.png'} />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-medium text-title max-w-[737px]">
            تاکنون نظرسنجی از مشتریان، ثبت ضمانت نامه، فرم های بازخورد، ثبت نام برنامه سفیر، ثبت رویدادها و ثبت نام در خبرنامه را ایجاد کرده ایم.
            <br></br>
            <span>
              <HighlightText
                keyword="سپیدز"
                text="فرم ها چه به سبک سپیدز چند مرحله ای و چه تک صفحه ای یا ترکیبی عالی به نظر می رسند.بهترین جایگزین برای سپیدز!"
              />
            </span>
          </p>
          <p className='w-max text-xs font-medium text-title bg-white-400 px-2 py-1 rounded-full mr-10 before:content-[" "] before:block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-20 before:border-t before:border-t-white-600 before:z-[-1] z-[+1] before:left-full'>
            مدیر کترینگ و رستوران سلمان
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
