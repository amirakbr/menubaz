import Button from '@/app/commonComponents/button';
import HighlightText from '@/app/commonComponents/highliter';
import StartIcon from '@/app/public/icons/starIcon';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex flex-col gap-8 items-center text-center ">
      <span className="py-1 px-4 border border-white-600 rounded-xl text-sm font-medium">ویژگی های پیشرفته، هزینه کمتر</span>
      <h1 className="text-title text-3xl font-bold">منوباز بالاتر از همه جایگزینی بهتر</h1>
      <h2 className="text-xl font-medium text-subtitle-400 max-w-[763px]">
        هر آنچه را که در مورد سپیدز دوست دارید، به‌علاوه جمع‌آوری داده‌های پیشرفته، گردش‌های کاری قابل تنظیم، و تجزیه و تحلیل هوش مصنوعی دریافت کنید -
        همه با 60٪ هزینه کمتر.
      </h2>
      <div className="flex items-center gap-6 justify-center">
        <Button variant="contained" color="secondary" className="w-max" size="medium">
          همین حالا رایگان شروع کنید !
        </Button>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium">
              <HighlightText keyword="1000+" text="بر اساس 1000+ بررسی در" />
            </p>
            <div className="flex items-center gap-1">
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image width={24} height={24} className="rounded-full object-center object-cover" alt="partner image" src={'/partners/partner1.png'} />
            <Image width={24} height={24} className="rounded-full object-center object-cover" alt="partner image" src={'/partners/partner5.png'} />
            <Image width={24} height={24} className="rounded-full object-center object-cover" alt="partner image" src={'/partners/partner6.png'} />
            <Image width={24} height={24} className="rounded-full object-center object-cover" alt="partner image" src={'/partners/partner7.png'} />
            <Image width={24} height={24} className="rounded-full object-center object-cover" alt="partner image" src={'/partners/partner8.png'} />
            <Image width={24} height={24} className="rounded-full object-center object-cover" alt="partner image" src={'/partners/partner9.png'} />
            <Image width={24} height={24} className="rounded-full object-center object-cover" alt="partner image" src={'/partners/partner10.png'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
