import HighlightText from '@/app/commonComponents/highliter';
import Image from 'next/image';

const feedBackData = [
  {
    shopLogo: '/partners/carizno.png',
    comment: '"منوباز" نظرسنجی‌های بهتر و شخصی تر را برای مشتریان خود فراهم می‌کند. ',
    name: 'احسان امیریان',
    role: 'نماینده فروش یک شرکت تولیدی',
    avatarImage: '/avatar/avatar1.png',
  },
  {
    shopLogo: '/partners/partner2.png',
    comment: 'کار با "منوباز" خیلی راحت و آسونه و سرعت کار را بالا میبرد.',
    name: 'شیرین حمیدی',
    role: 'نماینده فروش یک شرکت تولیدی',
    avatarImage: '/avatar/avatar2.png',
  },
  {
    shopLogo: '/partners/partner1.png',
    comment: 'پشتیبانی  "منوباز"  فوق‌العاده است؛ همیشه خیلی سریع راهنمای می‌کند.',
    name: 'علیرضا شفیعی',
    role: 'فروشنده',
    avatarImage: '/avatar/avatar3.png',
  },
];

const UserFeedbacks = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <p className="text-2xl xl:text-3xl font-bold text-center text-title px-4">منوباز توسط نوآورترین تیم‌های جهان استفاده می‌شود</p>
      <div className="w-full relative">
        <div className="grid grid-cols-[repeat(3,354px)] gap-4 lg:gap-8 overflow-auto pb-2 xl:w-max xl:m-auto">
          {feedBackData?.map(({ avatarImage, comment, name, role, shopLogo }, index) => (
            <div className="flex flex-col justify-between gap-3 max-w-[354px]" key={`users feedbacks ${index}`}>
              <Image src={shopLogo} alt={shopLogo} width={42} height={42} />
              <p className="bg-white-200 rounded-lg p-1 text-base text-title">
                <HighlightText keyword='"منوباز"' text={comment} />
              </p>
              <div className="flex items-center gap-1">
                <Image alt="avatar image" src={avatarImage} width={32} height={32} className="rounded-full" />
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-title-400 text-8">{name}</p>
                  <p className="text-8 text-blueGray">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="block sm:hidden absolute z-5 bottom-0 left-0 h-full w-16 bg-gradient-to-r from-[white] to-transparent"></div>
      </div>
    </div>
  );
};
export default UserFeedbacks;
