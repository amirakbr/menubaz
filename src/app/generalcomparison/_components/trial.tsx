import Button from '@/app/commonComponents/button';
import HighlightText from '@/app/commonComponents/highliter';
import Image from 'next/image';

const trialData = [
  {
    title: 'بهبود کارایی',
    subtitle: 'سفارش‌دهی ساده و به‌روزرسانی‌های منو باعث صرفه‌جویی در زمان و کاهش خطاها می‌شود.',
    imageSrc: '/generalComparison/effecincy.png',
    imageClassName: 'object-contain',
  },
  {
    title: 'کاهش هزینه ها',
    subtitle: ' نیاز به چاپ مجدد مکرر منو را از بین ببرید.',
    imageSrc: '/generalComparison/decrease.png',
    imageClassName: 'object-cover',
  },
  {
    title: 'افزایش تجربه مشتری',
    subtitle: 'منوهای تعاملی و سفارش آسان، تجربه غذاخوری را لذت بخش تر می کند.',
    imageSrc: '/generalComparison/userFeedback.png',
    imageClassName: 'object-contain',
  },
  {
    title: 'افزایش درآمد',
    subtitle: ' جذب مشتریان جدید و افزایش دید آنلاین.',
    imageSrc: '/generalComparison/increase.png',
    imageClassName: 'object-cover',
  },
];

const Trial = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <p className="text-3xl font-bold text-title max-w-[560px] text-center">
        <HighlightText keyword="منوباز" text="امروز برای یک دوره آزمایشی رایگان ثبت نام کنید و تفاوت منوباز را تجربه کنید!" />
      </p>
      <div className="grid grid-cols-4 gap-20">
        {trialData?.map(({ imageSrc, subtitle, title, imageClassName }) => (
          <div className="flex flex-col gap-8 h-full justify-between" key={`${title}`}>
            <div className="flex items-center justify-center h-[220px] relative">
              <Image alt={imageSrc} src={imageSrc} fill className={`object-center max-w-[200px] ${imageClassName}`} />
            </div>
            <div className="flex flex-col gap-4 max-w-[232px]">
              <p className="text-title font-semibold">{title}</p>
              <p className="text-subtitle-400 font-medium text-xs">{subtitle}</p>
            </div>
            <Button variant="contained" color='secondary' className="w-max !p-2 text-8 font-medium" size='small'>
              کسب اطلاعات بیشتر
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trial;
