import Button from '@/app/commonComponents/button';

const CallToActionContact = () => {
  return (
    <div className="col-span-2 bg-white-200 rounded-lg p-8 flex flex-col gap-4 items-center justify-center h-full text-center">
      <p className="text-xl font-semibold">دوست دارید منوی آنلاین شما توسط تیم ما طراحی شود؟</p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
        <Button variant="secondary" className="w-full lg:w-auto">
          ثبت نام و دریافت فوری منو دیجیتال
        </Button>
        <Button variant="outline" className="border-primary text-title-400 w-full lg:w-auto">
          کسب اطلاعات بیشتر
        </Button>
      </div>
    </div>
  );
};

export default CallToActionContact;
