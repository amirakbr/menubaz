import Button from '@/app/commonComponents/button';
import Image from 'next/image';

const FooterSuggestion = () => {
  return (
    <>
      <div className="flex flex-col gap-16 mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 text-center lg:text-right items-start">
          <div className="flex flex-col gap-4">
            <h6 className="text-base font-medium lg:text-xl font-semibold text-complementary">همین الان نرم‌افزار خود را فعال کنید!</h6>
            <p className="lg:max-w-[580px] text-2xl lg:text-4xl font-bold text-title">
              تنها با چند کلیک ساده ثبت‌نام کنید و بلافاصله نرم‌افزار خود را فعال نمایید.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-subtitle lg:max-w-[640px] text-sm lg:text-base">
              انتخاب نرم‌افزار مناسب برای کسب‌و‌کارتان مهم است. با درخواست دمو از منوباز، به‌راحتی می‌توانید امکانات و ویژگی‌های ما را تجربه کنید شما
              می‌توانید تمامی ابزارهای لازم برای ایجاد یک داشبورد اختصاصی متناسب با رستوران و ویژگی‌های دلخواه خود ایجاد کنید و تصمیم‌گیری آگاهانه‌تری
              داشته باشید.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4 w-max mx-auto lg:m-0">
              <Button size="small" variant="secondary">
                شروع ثبت نام
              </Button>
              <Button size="small" variant="outline" className="border-gray">
                درخواست دمو
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block max-h-[35rem] overflow-hidden rounded-lg">
          <Image src="/panelImage.png" height={400} width={5000} alt="footer suggestion panel image" />
        </div>
      </div>
    </>
  );
};

export default FooterSuggestion;
