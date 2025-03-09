import CloseIcon from '@/app/public/icons/closeIcon';
import TickIcon from '@/app/public/icons/tick';
import Logo from '@/app/public/logo/logo';

const columnDefs = [
  {
    label: 'منوباز',
    name: 'menubaz',
    className: '',
  },
  {
    label: 'سپیدز',
    className: '',
    name: 'sepidz',
  },
  {
    label: 'باران',
    className: '',
    name: 'baran',
  },
  {
    label: 'ماپرا',
    className: '',
    name: 'mayra',
  },
  {
    label: 'محک',
    className: '',
    name: 'mahak',
  },
];

const data = [
  {
    feature: 'دسترسی آنلاین و آسان به سیستم',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'رابط کاربری ساده و کاربرپسند',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'مدیریت حقوق و دستمزد پرسنل',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'نصب و اجرا روی چندین سیستم بدون هزینه اضافه',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'دسترسی مستقیم به سامانه مدیران مالیاتی',
    menubaz: true,
    sepidz: true,
    baran: false,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'قابلیت ایجاد منوهای دیجیتال مجزا',
    menubaz: true,
    sepidz: true,
    baran: false,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'امکان ایجاد آیتم‌های چند قیمتی',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'قابلیت ثبت سفارش به صورت آنلاین و مستقیم',
    menubaz: true,
    sepidz: true,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'سفارش‌گیر گارسون',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'سیستم تخفیف‌گذاری ۳۶۰ کافه',
    menubaz: true,
    sepidz: false,
    baran: true,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'ایجاد حساب خودکار برای اولین سفارش',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'آیتم های محبوب هر مشتری',
    menubaz: true,
    sepidz: true,
    baran: false,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'تخفیف گذاری هوشمند بر اساس مشتری',
    menubaz: true,
    sepidz: false,
    baran: true,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'سامانه پیامک اختصاصی با قابلیت ارسال هوشمند',
    menubaz: true,
    sepidz: false,
    baran: false,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'امکان مشاهده موجودی ریالی و حجمی انبار',
    menubaz: true,
    sepidz: true,
    baran: false,
    mayra: false,
    mahak: false,
  },
  {
    feature: 'پشتیبانی از چند انباری',
    menubaz: true,
    sepidz: true,
    baran: false,
    mayra: false,
    mahak: false,
  },
];

const CompareTable = () => {
  return (
    <>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table>
            <thead className='after:content-[" "] after:block after:h-4 after:w-full after:bg-transparent'>
              <tr>
                <th className="p-2">
                  <Logo height={48} width={126} />
                </th>
                {columnDefs?.map(({ className, label }, index) => (
                  <td className="p-2 px-4 w-40 text-center" key={`columndef ${index}`}>
                    <p className={`${className}`}>{label}</p>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={`h-14 rounded-xl [&>*:first-child]:rounded-r-xl [&>*:last-child]:rounded-l-xl `}>
                  <td className={`p-2 px-4 text-base font-medium text-title ${index % 2 === 0 ? 'bg-white-300' : ''}`}>{item.feature}</td>
                  {[item.menubaz, item.sepidz, item.baran, item.mayra, item.mahak].map((value, idx) => (
                    <td key={idx} className={`p-2 w-40 text-center ${index % 2 === 0 ? 'bg-white-300' : ''}`}>
                      <div className="flex items-center justify-center">
                        {value ? (
                          <span className="rounded-full h-5 w-5 bg-primary-300 flex items-center justify-center">
                            <TickIcon primaryColor="#332C07" width={11} height={8} />
                          </span>
                        ) : (
                          <span className="rounded-full h-5 w-5 bg-pink-100 flex items-center justify-center">
                            <CloseIcon />
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">{/* <Button className="bg-yellow-500 text-white">بیشتر بدانید</Button> */}</div>
      </div>
    </>
  );
};

export default CompareTable;
