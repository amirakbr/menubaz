import HighlightText from '@/app/commonComponents/highliter';

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h1 className="text-2xl font-bold">
        <HighlightText text='یک نسخه آزمایشی رایگان از "منوباز" دریافت کنید!' keyword='"منوباز"' />
      </h1>
      <h2 className="text-xl text-subtitle-400">
        ببینید چرا منوباز به انتخاب اول رستوران‌داران تبدیل شده است. مدیریت، حسابداری و افزایش فروش خود را با منوباز تجربه کنید.
      </h2>
    </div>
  );
};

export default Header;
