import Button from '@/app/commonComponents/button';
import TestimonialCardContainer from './testimonialsCardsContainer';

const TestimonialContainer = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-8 items-end mb-8">
      <div className="px-4 flex flex-col gap-4 relative text-center items-center xl:items-start xl:text-right">
        <h4 className="text-xl font-semibold text-title">یک سیستم جامع برای تمامی کسب و کارها !!!</h4>
        <p className="text-subtitle">
          در نرم‌افزار رستوران و کافه منوباز، تمام ابزارهای لازم برای مدیریت موفق کسب‌وکار شما را فراهم کرده‌ایم. شما فقط بر طعم و کیفیت آماده‌سازی
          سفارشات تمرکز کنید.
        </p>
        <Button variant="secondary" className="xl:w-max">
          همین حالا ثبت نام کن
        </Button>
      </div>
      <TestimonialCardContainer />
    </div>
  );
};

export default TestimonialContainer;
