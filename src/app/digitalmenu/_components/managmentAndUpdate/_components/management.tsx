import Button from '@/app/commonComponents/button';
import FeeImage from './feeImage';

const Management = () => {
  return (
    <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-center lg:gap-16">
      <div className="flex flex-col gap-6 order-1 lg:order-2 lg:max-w-[826px]">
        <div className="flex flex-col gap-2">
          <p className="text-title font-semibold text-2xl">تعرفه ها</p>
          <p className="text-subtitle-400 text-xl">منو باز حامی شما!</p>
        </div>
        <p className="text-title-400 font-medium text-xl">
          با بررسی کسب و کار های مختلف در سراسر کشور و با هدف حمایت از کسب و کار های کوچک، منوباز قصد دارد تا بخشی از خدمات خود را به صورت رایگان در
          اختیار عموم قرار دهد. بله درست متوجه شدید، کاملا رایگان! به عبارت دیگر شما با استفاده از پلتفرم منوباز می توانید یک منو دیجیتال رایگان با
          آدرس اختصاصی و اسم و لوگو منحصر به فرد برای رستوران، کافی شاپ و هر کسب کار مرتبط دیگری داشته باشید، به شکلی که مشتریان شما می توانند تمامی
          اطلاعات مربوط به منو شما به همراه تمامی مشخصات و عکس های آیتم ها را در قالب یک بستر حرفه ای و بهینه، مشاهده کنند. همچنین امکان ارتقاء منو
          دیجیتال شما در هر زمانی و بدون هیچ دردسری نیز برای شما وجود خواهد داشت تا از تمامی امکانات منوباز نظیر سفارش، پرداخت و همه مواردی که پیش از
          این گفته شده، استفاده کنید.
        </p>
        <Button variant="contained" color="secondary" className="w-max text-xs">
          کسب اطلاعات بیشتر
        </Button>
      </div>
      <FeeImage />
    </div>
  );
};

export default Management;
