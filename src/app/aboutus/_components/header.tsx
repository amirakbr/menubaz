import ArrowLeftIcon from '@/app/public/icons/arrowLeft';

const Header = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-bold text-title text-3xl">درباره ما</h1>
        <div className="flex flex-col gap-2">
          <p className="text-xl text-subtitle-400">ما اینجاییم تا کسب‌وکار شما را متحول کنیم</p>
          <h2 className="text-lg text-subtitle font-medium">
            در منوباز، باور داریم که مدیریت رستوران باید ساده، هوشمند و بهینه باشد. ما با ترکیب فناوری پیشرفته و تیمی از متخصصان باتجربه، نرم‌افزاری
            طراحی کرده‌ایم که به شما کمک می‌کند تا زمان بیشتری برای تمرکز روی مشتریان و رشد کسب‌وکارتان داشته باشید.
          </h2>
        </div>
        <div className="flex items-center justify-center gap-0.5 text-complementary text-xs ">
          <span>به ما بپیوندید</span>
          <ArrowLeftIcon />
        </div>
      </div>
      <div className="min-h-[225px] rounded-lg bg-gradient-to-t from-[#d9d9d9] to-[#f9f9f957] to-[40%]"></div>
    </div>
  );
};

export default Header;
