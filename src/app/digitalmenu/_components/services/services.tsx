import Button from '@/app/commonComponents/button';
import Image from 'next/image';

const servicesData = [
  {
    title: 'امکانات',
    subtitle: 'قراره شیفته غذاهاتون بشن!',
    description:
      'ایجاد منو دیجیتال حرفه ای با قابلیت دسته بندی، درج تصاویر جذاب، نمایش توضیحات و قیمت، ایجاد منوهای متغیر برای هر روز و هر ساعت و بروزرسانی آنی و بی دردسر منو ها تنها گوشه ای از خدمات حرفه ای منوباز می باشد!',
    imageSrc: '/digitalMenu/customer-experience.webp',
  },
  {
    title: 'محصولات سفارشی',
    subtitle: 'بستنی 3 اسکوپه با طعم های شاتوت، وانیل و شکلات!',
    description:
      'با استفاده از این قابلیت منوباز، مشتریان شما این امکان را خواهند داشت تا محصولات مورد نظر خود را با هر سایز و ویژگی ای در قالب قاعده های از پیش تعیین شده، سفارش دهند.',
    imageSrc: '/digitalMenu/take-away-order-online.webp',
  },
  {
    title: 'پرداخت',
    subtitle: 'نقد میدی، کارت می کشی یا آنلاین پرداخت میکنی؟',
    description:
      'با منوباز دیگر نگران بهم ریختن صندوق آخر شب نباشید و با خیال راحت از هر روش پرداختی دلخواه استفاده کنید چرا که با سیستم فاکتور و پرداخت منوباز مشتری های شما (البته با اجازه شما) می توانند هزینه سفارشات خود را با استفاده از وجه نقد، کارت بانکی و حتی درگاه پرداخت مستقیم شما پرداخت کنند؛ فراموش نکنید که هزینه فروش آنلاین شما دقیقا در همان لحظه به حساب شما واریز خواهد شد! بدون هیچ معطلی و نگرانی برای نقدینگی مجموعه.',
    imageSrc: '/digitalMenu/young-asian-woman.webp',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-10 lg:gap-16">
      {servicesData?.map(({ description, imageSrc, subtitle, title }, index) => (
        <div className="grid grid-cols-1 gap-8 lg:justify-between lg:items-center lg:grid-cols-[auto_auto]" key={`service ${index}`}>
          <div className={`flex flex-col gap-4 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} lg:w-[561px]`}>
            <div className="flex flex-col gap-2">
              <p className="text-title text-2xl font-semibold">{title}</p>
              <p className="text-xl text-subtitle-400 max-w-80 lg:max-w-[unset]">{subtitle}</p>
              <p className="text-base font-medium text-title">{description}</p>
            </div>
            <Button className="w-max !text-xs" color="secondary" variant="contained">
              کسب اطلاعات بیشتر
            </Button>
          </div>
          <div
            className={`w-96 h-52 lg:h-64 rounded-xl overflow-hidden relative m-auto ${
              index % 2 === 1 ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'
            }`}
          >
            <Image fill alt={`${imageSrc} image`} src={imageSrc} className="relative object-center object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
