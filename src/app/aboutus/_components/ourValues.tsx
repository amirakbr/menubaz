import Image from 'next/image';

const ourValuesData = [
  {
    label: 'شناخت نیازهای کسب‌وکارها',
    description:
      'ما باور داریم هر کسب‌وکار داستان و نیازهای منحصربه‌فرد خود را دارد. در منوباز، با درک عمیق از چالش‌های رستوران‌ها، راهکارهایی ارائه می‌دهیم که به طور مستقیم به رفع نیازهای واقعی آن‌ها کمک می‌کند.',
    imageSrc: '/aboutUs/close-up-two-businesspeople-analyzing-report-office 1.webp',
  },
  {
    label: 'مشتری‌مداری و شفافیت',
    description:
      'اعتماد مشتریان برای ما ارزشمندترین دارایی است. با ارائه خدمات شفاف و تمرکز بر ایجاد تجربه‌ای مثبت، همواره در کنار مشتریان خود هستیم تا آن‌ها را در مسیر موفقیت همراهی کنیم.',
    imageSrc: '/aboutUs/digital-graph-with-businessman-hand-overlay 1.webp',
  },
  {
    label: 'نوآوری',
    description:
      'ما به دنبال ایجاد راهکارهای خلاقانه هستیم که مدیریت رستوران‌ها را ساده‌تر و هوشمندتر کنند. نوآوری، هسته اصلی فعالیت‌های منوباز است.',
    imageSrc: '/aboutUs/front-view-businessman-holding-king_23-2148569086 1.webp',
  },
  {
    label: 'پشتیبانی حرفه‌ای',
    description:
      'ما فقط یک نرم‌افزار ارائه نمی‌دهیم؛ بلکه با تیم پشتیبانی متخصص خود، همراه مشتریانمان هستیم تا در هر مرحله از استفاده از منوباز، بهترین تجربه را داشته باشند.',
    imageSrc: '/aboutUs/busy-man-with-work 1.webp',
  },
  {
    label: 'رشد و توسعه',
    description:
      'ماموریت ما کمک به رشد و توسعه کسب‌وکارهای مشتریان است. با ابزارهای منوباز، مسیر موفقیت هموارتر می‌شود و رستوران‌ها می‌توانند بر روی اهداف بزرگ‌تر خود تمرکز کنند',
    imageSrc: '/aboutUs/businessperson-s-hand-preparing-red-graph-glass-board 1.webp',
  },
];

const OurValues = () => {
  return (
    <div className="flex flex-col gap-7">
      <p className="text-title text-2xl font-bold text-center">ارزش های ما</p>
      <div className="flex flex-col gap-10">
        {ourValuesData?.map(({ description, imageSrc, label }, index) => (
          <div className="grid grid-cols-[auto] md:grid-cols-2 items-center sm:justify-center gap-3" key={`our values ${index}`}>
            <div
              className={`flex flex-col gap-2 text-right sm:text-center lg:text-right items-start sm:items-center lg:items-start ${
                index % 2 === 1 ? 'md:order-2' : 'md:order-1'
              }`}
            >
              <p className="flex items-center text-title font-medium text-xl before:content-[' '] before:w-4 before:h-4 before:ml-2 before:bg-primary before:rounded-full">
                {label}
              </p>
              <p className="text-subtitle text-base">{description}</p>
            </div>
            <div className={`overflow-hidden rounded-lg w-max justify-self-center ${index % 1 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <Image src={imageSrc} width={380} height={254} className="rounded-lg object-cover object-center" alt={imageSrc} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
