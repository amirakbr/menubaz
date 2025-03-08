import LeftChevronicon from '@/app/public/icons/leftChevronIcon';
import MonitOirMobileIcon from '@/app/public/icons/monitorMobileIcon';
import { ICardProps } from '../interface';
import KeyboardIcon from '@/app/public/icons/keyboardIcon';
import CardsIcon from '@/app/public/icons/cardsIcon';
import TruckIcon from '@/app/public/icons/truckIcon';

const Card = ({ icon, label }: ICardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {icon}
      <span className="text-sm text-title-400">{label}</span>
    </div>
  );
};

const Divider = () => {
  return (
    <p className="flex items-center h-max">
      <span className="w-16 border-b border-dashed border-b-white-600"></span>
      <LeftChevronicon primaryColor="#BFBFBF" height={10} />
    </p>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col gap-10 items-center max-w-[812px] mx-auto">
      <div className="flex flex-col gap-4 text-center items-center">
        <h1 className="text-title text-2xl font-bold">منو دیجیتال</h1>
        <h2 className='text-xl text-subtitle-400'>راهکاری برای تمامی نیازهای رستوران شما!</h2>
        <h3 className='font-medium text-sm text-title'>
          منو دیجیتال نسل جدیدی از منو رستورانی است که به صاحبین کسب و کارها کمک می کند تا خدمات و محصولاتشان را به شکلی هوشمند و جذاب ارائه داده و
          تجربه خرید بهتری را برای مشتریان ایجاد کنند. این منو با استفاده از فناوری QR کد به سادگی هر چه تمام تر در دسترس مشتری ها قرار گرفته و به
          آنان اجازه میدهد تا از طریق تلفن همراه خود و بدون نیاز به دانلود هیچ برنامه ای، آیتم های منو را مرور کرده و سفارش دلخواه خود را ثبت کنند.
        </h3>
      </div>
      <div className="bg-white-200 border border-white-300 py-7 w-full flex items-center justify-center rounded-xl lg:px-2">
        <div className="w-max grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center">
          <Card icon={<MonitOirMobileIcon secondaryColor="#828282" height={44} width={44} />} label={'اسکن'} />
          <Divider />
          <Card icon={<KeyboardIcon height={44} width={44} />} label={'اسکن'} />
          <div className="hidden md:block h-max">
            <Divider />
          </div>
          <Card icon={<CardsIcon height={44} width={44} />} label={'اسکن'} />
          <Divider />
          <Card icon={<TruckIcon height={44} width={44} />} label={'اسکن'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
