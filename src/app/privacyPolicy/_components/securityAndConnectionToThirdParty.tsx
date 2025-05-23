import Title from './title';

const data = {
  description:
    'امنیت اطلاعات شخصی شما را برای ما بسیار مهم و جدی است و بر اساس بهترین راهکارها از اقدامات مختلفی برای ایمن نگه داشتن آنها استفاده می‌کنیم.',
  content: [
    {
      description:
        'برای جلوگیری از دسترسی افراد غیرمجاز و پردازش غیرقانونی و هرگونه آسیب،از اقدامات امنیتی برای محافظت از اطلاعاتی که در اختیار ما قرار می‌دهید استفاده می‌کنیم',
    },
    { description: 'اگر مشکوک به هرگونه سوء استفاده، از دست دادن یا دسترسی غیرمجاز به اطلاعات شخصی خود هستید، لطفاً فوراً به ما اطلاع دهید' },
    {
      description:
        'اگر به هرگونه سوء استفاده، از دست دادن یا دسترسی غیرمجاز به اطلاعات شخصی شما مشکوک باشیم، ممکن است شما را از این سوء ظن مطلع کنیم و اقدامات فوری برای محدود کردن هرگونه دسترسی یا توزیع بیشتر به اطلاعات شخصی شما انجام دهیم. اگر تشخیص دهیم که نقض احتمالاً به شما آسیب جدی وارد می‌کند و نمی‌توانیم با اقدامات اصلاحی از خطر احتمالی آسیب جدی جلوگیری کنیم، مطابق با قانون حفاظت از داده‌ها اقدام خواهیم کرد',
    },
    {
      description:
        'اگر اطلاعات شخصی ناخواسته‌ای را دریافت کنیم که طبق این متن، یا در محدوده قانون، مجاز به ذخیره‌سازی آن‌ها نباشیم، در صورت قانونی و معقول بودن، در اسرع وقت اطلاعات شخصی ناخواسته را از بین می‌بریم. در صورتی که دیگر نیازی به ارائه خدمات ما نداشته باشید، در صورتی که انجام این کار قانونی و معقول باشد، اطلاعات شخصی شما را از بین می‌بریم',
    },
  ],
};

const ConnectionAndSecurityToThirdParties = () => {
  return (
    <div className="flex flex-col gap-3">
      <Title title="امنیت و اتصال به اشخاص ثالث (Third Parties)" />
      <div>
        <p>{data?.description}</p>

        {data?.content?.map(({ description }, index) => (
          <p
            key={`connection to third parties ${index}`}
            className='flex before:shrink-0 before:content-[" "] before:ml-3 before:top-3 before:relative relative before:w-1.5 before:h-1.5 before:rounded-full before:bg-title-400'
          >
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ConnectionAndSecurityToThirdParties;
