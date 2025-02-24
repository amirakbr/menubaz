import Message2Icon from '@/app/public/icons/message-2';
import Link from 'next/link';

const SocialMediaContact = () => {
  return (
    <div className="order-2 xl:order-1 xl:w-[368px] xl:h-[276px] flex flex-col gap-4 items-center justify-center bg-white-200 rounded-lg p-4">
      <Message2Icon />
      <p className="text-title text-base">با افتخار، پاسخگوی شما هستیم</p>
      <div className="flex items-center gap-4">
        <p className="text-title-400 text-sm">پاسخگوی تلگرام</p>
        <Link className="text-base text-complementary" href={'mailto:support@menobuzz.com'}>
          support@menobuzz.com
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-title-400 text-sm">پاسخگوی واتساپ</p>
        <Link className="text-base text-complementary" href={'mailto:support@menobuzz.com'}>
          support@menobuzz.com
        </Link>
      </div>
      <p className="text-center text-title-400 text-xs">
        تفاوت را با منوباز تجربه کنید. تیم پشتیبانی اختصاصی ما اینجاست تا به شما 24 ساعته کمک کند و از تجربه ایمیلی روان و بدون دردسر اطمینان حاصل
        کند.
      </p>
    </div>
  );
};

export default SocialMediaContact