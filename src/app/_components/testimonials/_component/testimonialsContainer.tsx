import Button from '@/app/commonComponents/button';
import TestimonialCardContainer from './testimonialsCardsContainer';

const TestimonialContainer = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[auto_3fr] justify-between gap-8 items-end mb-8">
      <div className="flex flex-col gap-5 relative text-center items-center xl:items-start xl:text-right xl:max-w-[360px] w-auto px-4 xl:p-0">
        <h4 className="text-2xl xl:3xl font-bold text-title max-w-[275px] xl:w-auto">یک سیستم جامع برای تمامی کسب و کارها !!!</h4>
        <p className="text-subtitle text-base">
          در نرم‌افزار رستوران و کافه منوباز، تمام ابزارهای لازم برای مدیریت موفق کسب‌وکار شما را فراهم کرده‌ایم. شما فقط بر طعم و کیفیت آماده‌سازی
          سفارشات تمرکز کنید.
        </p>
        <Button variant="contained" color="secondary" className="xl:w-max w-full">
          همین حالا ثبت نام کن
        </Button>
      </div>
      <TestimonialCardContainer />
    </div>
  );
};

export default TestimonialContainer;
