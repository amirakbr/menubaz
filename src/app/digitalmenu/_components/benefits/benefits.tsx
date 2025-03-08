'use client';

import { useEffect, useState } from 'react';
import HorizontalTab from './_components/horizontalTab';
import Card from './_components/card';

const benefitsData = [
  {
    title: 'حس یک تجربه عالی',
    subTitle: 'حفظ مشتری های قدیمی و جذب کلّی مشتری وفادار جدید!',
    description:
      'با منوباز مشتری ها دیگر نیازی به انتظار برای گارسون یا ثبت سفارش و پرداخت نخواهند داشت؛ حتی می توانید برای همیشه با مشکلاتی مثل تغییر قیمت یا موجود نبودن غذا، پرسش های مکرر مشتریان در مورد جزئیات هر آیتم و هماهنگ نبودن کارکنان، خداحافظی کنید و به طور کلی با حذف عوامل دست و پا گیر، به مشتری ها یک تجربه معرکه از خرید را منتقل کنید.',
  },
  {
    title: 'نحوه استفاده',
    subTitle: 'از این ساده تر دیگه نمیشه!',
    description:
      'دیگر مشتری ها نیاز نخواهند داشت تا منتظر منو بمانند، فقط کافی‌ست کیو آر کد مخصوص میز خود را با دوربین تلفن همراهشان اسکن کنند تا به صورت خودکار هر چیزی را که نیاز دارند، در موبایلشان داشته باشند. حتی اگر نیاز به کمک بیشتری نیز باشد می توانند با استفاده از قابلیت پیجر منو باز، سالن دار را به میز خود صدا کنند تا او با استفاده از پنل مخصوص خود، سفارش را ثبت کند.',
  },
];

const Benefits = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>();

  useEffect(() => {
    let tabInterval;
    if (selectedTabIndex === undefined) {
      setSelectedTabIndex(0);
    }
    tabInterval = setInterval(() => {
      setSelectedTabIndex(selectedTabIndex === 0 ? 1 : 0);
    }, 5000);
    return () => {
      clearInterval(tabInterval);
    };
  }, [selectedTabIndex]);

  return (
    <div className="flex flex-col items-center gap-8">
      {selectedTabIndex !== undefined ? (
        <>
          <HorizontalTab selectedTabIndex={selectedTabIndex} />
          <div className="block sm:hidden">
            <Card data={benefitsData[selectedTabIndex]} selectedTabIndex={selectedTabIndex} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Benefits;
