import Button from '@/app/commonComponents/button';
import UpdateNotification from './updateNotif';

const Update = () => {
  return (
    <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-center">
      <div className="flex flex-col gap-6 max-w-[594px]">
        <div className="flex flex-col gap-2">
          <p className="text-title font-semibold text-2xl">مدیریت و بروزرسانی</p>
          <p className="text-subtitle-400 text-xl">بی نیاز از هر ابزار دیگر!</p>
        </div>
        <p className="text-title-400 font-medium text-xl">
          با منو دیجیتال منحصر به فرد خود، به سادگی می توانید از هر جایی بر تمامی شعب و بخش های مجموعه خود از قبیل سفارش گیری، پرداخت و فروش رستوران
          یا کسب و کار های مرتبط دیگر، مدیریت داشته باشید. از وضعیت (باز یا بسته بودن) و موجودی رستوران گرفته تا گزارش های پرداختی، رفتار و علایق
          مشتری ها و...، همه و همه در اختیار شماست.
        </p>
        <Button color="secondary" variant='contained' className="w-max text-xs">
          کسب اطلاعات بیشتر
        </Button>
      </div>
      <UpdateNotification />
    </div>
  );
};

export default Update;
