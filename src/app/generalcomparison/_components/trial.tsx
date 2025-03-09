import Button from '@/app/commonComponents/button';
import HighlightText from '@/app/commonComponents/highliter';
import Image from 'next/image';

const trialData = [
  {
    title: 'بهبود کارایی',
    subtitle: 'سفارش‌دهی ساده و به‌روزرسانی‌های منو باعث صرفه‌جویی در زمان و کاهش خطاها می‌شود.',
    imageSrc: '/generalComparison/effecincy.png',
  },
  {
    title: 'کاهش هزینه ها',
    subtitle: ' نیاز به چاپ مجدد مکرر منو را از بین ببرید.',
    imageSrc: '/generalComparison/decrease.png',
  },
  {
    title: 'افزایش تجربه مشتری',
    subtitle: 'منوهای تعاملی و سفارش آسان، تجربه غذاخوری را لذت بخش تر می کند.',
    imageSrc: '/generalComparison/userFeedback.png',
  },
  {
    title: 'افزایش درآمد',
    subtitle: ' جذب مشتریان جدید و افزایش دید آنلاین.',
    imageSrc: '/generalComparison/increase.png',
  },
];

const Trial = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <p className="text-3xl font-bold text-title max-w-[560px] text-center">
        <HighlightText keyword="منوباز" text="امروز برای یک دوره آزمایشی رایگان ثبت نام کنید و تفاوت منوباز را تجربه کنید!" />
      </p>
      <div className="grid grid-cols-4 gap-20">
        {trialData?.map(({ imageSrc, subtitle, title }) => (
          <div className="flex flex-col gap-8 h-full justify-between" key={`${title}`}>
            <div className="flex items-center justify-center h-[220px] relative">
              <Image alt={imageSrc} src={imageSrc} fill className="object-center object-contain max-w-[200px] mx-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-title font-semibold">{title}</p>
              <p className="text-subtitle-400 font-medium text-xs">{subtitle}</p>
            </div>
            <Button variant="secondary" className="w-max">
              کسب اطلاعات بیشتر
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trial;
