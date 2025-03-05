import SecurityUser from '@/app/public/icons/securityUser';

const Header = () => {
  return (
    <div className="flex flex-col gap-4 text-sm items-center text-center">
      <SecurityUser />
      <h1 className='text-2xl font-bold text-title lg:text-3xl'>قوانین و شرایط استفاده</h1>
      <p className='text-subtitle-400 text-xl lg:text-base max-w-[497px]'>هر سایت قوانین خاص خودش رو داره قبل از استفاده از هر پلتفرم آنلاین، حتماً شرایط استفاده‌اش رو بخون تا از قوانینش باخبر بشی</p>
    </div>
  );
};

export default Header;
