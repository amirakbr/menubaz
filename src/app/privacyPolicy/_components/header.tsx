import SecurityIcon from '@/app/public/icons/securityIcon';

const Header = () => {
  return (
    <div className="flex flex-col gap-4 text-sm items-center text-center">
      <SecurityIcon />
      <h1 className="text-2xl font-bold text-title lg:text-3xl">حریم خصوصی</h1>
      <p className="text-subtitle-400 text-xl lg:text-base max-w-[800px]">
        قبل از تعامل با هر پلتفرمی، خط مشی رازداری آنها را با دقت بخوانید هر سایت قوانین خاصی در مورد جمع آوری، استفاده و اشتراک گذاری داده ها دارد
        این دانش برای محافظت از اطلاعات شخصی و ایجاد آنها ضروری است انتخاب های آگاهانه در مورد فعالیت های آنلاین شما.
      </p>
    </div>
  );
};

export default Header;
