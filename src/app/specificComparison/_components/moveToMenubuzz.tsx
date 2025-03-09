import Button from '@/app/commonComponents/button';

const MoveToMenuBuzz = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-4 items-center">
        <p className="max-w-[825px] text-3xl font-bold text-title">چرا باید از سپیدز به منوباز تغییر دهید</p>
        <p className="max-w-[477px] text-base font-medium text-subtitle-400">
          منوباز به شما این امکان را می دهد که با هوش مصنوعی پیشرفته اطلاعاتی کسب کنید، پورتال های مارک دار برای مشتریان بسازید، گردش کار را خودکار
          کنید، و عملیات خود را بدون دردسر مقیاس کنید.
        </p>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-7">
        <div className="py-10 px-4 pb-0 justify-between bg-white-100 rounded-xl flex flex-col gap-5">
          <p className="text-title text-2xl font-semibold">کسب و کار خود را با پورتال های مشتری مقیاس دهید</p>
          <p className="text-base font-medium text-subtitle">
            منوباز به شما این امکان را می دهد که بدون کدنویسی پورتال های قدرتمند بسازید. تجارب مشتری یکپارچه ایجاد کنید، گردش کار را ساده کنید و
            ارتباطات را افزایش دهید. طراحی پورتال های مارک دار، کنترل دسترسی کاربر، و خودکارسازی وظایف بدون دردسر.
          </p>
          <div className="w-[90%] h-[371px] bg-whiteBlack-100 border-2 border-[#EFEFEF] rounded-lg border-b-transparent"></div>
        </div>
        <div className="py-10 px-4 pb-0 justify-between bg-white-100 rounded-xl flex flex-col gap-5">
          <p className="text-title text-2xl font-semibold">همه خدمات خود را خود میزبانی کنید</p>
          <p className="text-base font-medium text-subtitle">
            داده های خود را با منوباز در خانه نگه دارید. با حفظ انطباق با HIPAA از کنترل کامل، امنیت پیشرفته و یکپارچه سازی یکپارچه لذت ببرید.
          </p>
          <div className="w-[90%] h-[371px] bg-whiteBlack-100 border-2 border-[#EFEFEF] rounded-lg border-b-transparent"></div>
        </div>
      </div>
      <Button variant="secondary">اکنون منوباز را امتحان کنید</Button>
    </div>
  );
};

export default MoveToMenuBuzz;
