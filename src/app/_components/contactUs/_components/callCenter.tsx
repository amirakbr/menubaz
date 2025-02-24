import PhoneCallingIcon from '@/app/public/icons/phoneCalingIcon';
import Link from 'next/link';

const CallCenter = () => {
  return (
    <div className="xl:w-[328px] xl:h-[276px] flex flex-col gap-4 items-center justify-center bg-white-200 rounded-lg p-4">
      <PhoneCallingIcon />
      <p className="text-title text-base">با افتخار، پاسخگوی شما هستیم</p>
      <div className="flex items-center gap-4">
        <p className="text-title-400 text-sm">تلفن گویا</p>
        <Link className="text-base text-complementary" href={'tel:02191692046'}>
          ۰۲۱-۹۱۶۹۲۰۴۶
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-title-400 text-sm">شماره همراه</p>
        <Link className="text-base text-complementary" href={'tel:09926070508'}>
          0992 607 0508
        </Link>
      </div>
    </div>
  );
};

export default CallCenter;
