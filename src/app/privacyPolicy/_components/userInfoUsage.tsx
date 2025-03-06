import { Fragment } from 'react';
import Title from './title';

const userInfoUsageData = [
  {
    label:
      'شما همیشه این گزینه را خواهید داشت که پیام‌های بازاریابی را از ما دریافت نکنید و می توانید در هر زمان از دریافت آنها انصراف دهید.قانون حفاظت از داده‌ها ما را ملزم می‌نماید که دلایل قانونی معتبر برای پردازش اطلاعات شخصی شما داشته باشیم. اهدافی که از اطلاعات شخصی شما برای آنها استفاده می‌کنیم را بر اساس مبانی متفاوت، طبقه بندی نموده‌ایم که به شرح زیر می‌باشند:',
    content: [
      {
        description: 'زمانی که رضایت خود را ارائه کرده‌اید',
        isBold: true,
        isSubDesc: false,
      },

      {
        description:
          'در مواردی که لازم است از تعهدات قانونی ما پیروی کنید ما از اطلاعات شخصی شما برای پیروی از تعهدات خود بر اساس قانون از جمله نگهداری سوابق مربوط به حقوقی که در ارتباط با پردازش اطلاعات شخصی شما اعمال می‌کنید، استفاده خواهیم کرد.',
        isBold: true,
        isSubDesc: false,
      },
      {
        description: 'جایی که پردازش اطلاعات شما برای ما ضروری است تا منافع قانونی را دنبال کنیم.',
        isBold: true,
        isSubDesc: false,
      },
    ],
  },
  {
    label: 'با توجه به منافع قانونی و به عنوان یک تجارت، از اطلاعات شخصی شما ممکن است در موارد زیر استفاده گردد:',
    content: [
      {
        description: 'پردازش لازم برای ترویج کسب و کار',
        isSubDesc: true,
        isBold: false,
      },

      {
        description: 'پردازش لازم برای پشتیبانی از درخواست‌های کاربران سایت‌',
        isSubDesc: true,
        isBold: false,
      },
      {
        description: 'پردازش لازم برای پاسخگویی به شرایط متغیر بازار و نیازهای مشتریان',
        isSubDesc: true,
        isBold: false,
      },
      {
        description: 'پردازش لازم برای اجرای جنبه‌های اداری و فنی کسب و کار به طور کارآمد و موثر',
        isSubDesc: true,
        isBold: false,
      },
    ],
  },
];

const UserInfoUsage = () => {
  return (
    <div className="flex flex-col gap-3">
      <Title title="استفاده از اطلاعات شخصی شما" />
      <div className="flex flex-col gap-8">
        {userInfoUsageData?.map(({ content, label }, index) => (
          <div key={`user info usage description ${index}`}>
            <p>{label}</p>
            {content?.map(({ description, isSubDesc, isBold }, index) => (
              <div key={`user info usage sub description ${index}`}>
                {isBold ? (
                  <p className="flex items-start gap-1">
                    <span>3.{index + 1}</span>
                    <span className="text-title font-medium">{description}</span>
                  </p>
                ) : null}
                {isSubDesc ? (
                  <p className='flex before:content-[" "] before:ml-3 before:top-3 before:relative relative before:w-1.5 before:h-1.5 before:rounded-full before:bg-title-400'>
                    {description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfoUsage;
