import Flag2Icon from '@/app/public/icons/flag2';
import MagicStarIcon from '@/app/public/icons/magicStar';
import MedalIcon from '@/app/public/icons/medal';
import MonitorIcon from '@/app/public/icons/monitorIcon';

const historyTimeLine = [
  {
    date: '1401',
    summary:
      'منوباز فعالیت خود را در سال ۱۴۰۱ با تمرکز بر طراحی نرم‌افزار مدیریت رستوران آغاز کرد. با بررسی نیازهای بازار و مشاوره با متخصصان این صنعت، اولین نسخه نرم‌افزار تولید و به بازار عرضه شد که توانست پاسخگوی نیازهای اولیه کسب‌وکارهای غذایی باشد.',
    icon: Flag2Icon,
  },
  {
    date: '1402',
    summary:
      'در سال ۱۴۰۲، منوباز با استقبال بازار و رشد تقاضا برای محصول خود، بر بهبود و توسعه نرم‌افزار تمرکز کرد. این سال با راه‌اندازی واحد پشتیبانی تخصصی و اعمال تغییرات بر اساس بازخورد مشتریان، نقطه عطفی در ارائه خدمات بهتر و جلب رضایت کاربران بود.',
    icon: MonitorIcon,
  },
  {
    date: '1403',
    summary:
      'در سال ۱۴۰۳، منوباز با ارائه خدماتی نوآورانه و پاسخ به نیازهای پیشرفته‌تر مشتریان، توانست خود را به‌عنوان یکی از راهکارهای پیشرو در مدیریت رستوران‌ها مطرح کند. این پیشرفت باعث شد که منوباز در این حوزه جایگاه متمایزی پیدا کند و بیش از گذشته مورد اعتماد کسب‌وکارهای غذایی باشد.',
    icon: MedalIcon,
  },
  {
    date: 'سال 1404 و فراتر از آن',
    summary:
      'منوباز با نگاه به آینده، همچنان بر نوآوری و توسعه مداوم تمرکز خواهد داشت. ما قصد داریم با بهره‌گیری از فناوری‌های پیشرفته و درک عمیق از نیازهای بازار، ابزارهایی برای مدیریت بهتر و رشد کسب‌وکارها ارائه دهیم. هدف ما این است که همچنان به‌عنوان یک همراه مطمئن، نقش موثری در موفقیت مشتریان خود ایفا کنیم.',
    icon: MagicStarIcon,
  },
];

const HistoryTimeLine = () => {
  return (
    <div className="grid grid-cols-[auto] justify-center xl:grid-cols-[auto_auto_auto_auto] xl:max-w-[1136px] m-auto">
      {historyTimeLine?.map(({ date, icon: Icon, summary }, index) => {
        return (
          <div
            className={`flex flex-col max-w-96 xl:max-w-[auto] ${index % 2 === 0 ? 'xl:flex-col' : 'xl:flex-col-reverse'}`}
            key={`history timeline card ${index}`}
          >
            <div className="h-32 relative xl:w-[248px]">
              <div className="absolute top-0 h-full left-1/2 -translate-x-1/2 border-l border-dashed"></div>
              <div
                className={`left-1/2 absolute -translate-x-1/2 ${index === 0 ? 'top-0' : 'top-1/2 -translate-y-1/2'} ${
                  index % 2 === 0 ? 'xl:top-0 xl:bottom-[uset] xl:translate-y-0' : 'xl:bottom-0 xl:top-[unset] xl:translate-y-0'
                } rounded-full bg-[#FFFFFF] border border-black-300 hover:bg-primary group transition-all w-12 h-12 hover:w-16 hover:h-16 xl:w-16 xl:h-16 flex items-center justify-center`}
              >
                <div className="w-7 h-7 group-hover:w-8 group-hover:h-8 xl:w-8 xl:h-8 text-gray-400 group-hover:text-gray-600 transition-all">
                  <Icon width={'inherit'} height={'inherit'} primaryColor="currentColor" secondaryColor="currentColor" />
                </div>
              </div>
            </div>
            <div className="xl:relative flex">
              <div className="flex flex-col rounded-lg bg-white-200 h-[230px] xl:h-[322px] xl:w-[248px] px-2 py-7 xl:px-4 jusify-center">
                <div className="flex flex-col gap-1 xl:gap-3">
                  <p className={`${index === 0 ? 'text-complementary font-semibold text-xl' : 'text-title-400 font-medium text-base'}`}>{date}</p>
                  <p className="text-subtitle-400 text-base"> {summary}</p>
                </div>
              </div>
              <div className={`w-12 h-full hidden ${index === historyTimeLine?.length - 1 ? 'xl:hidden' : 'xl:block'}`}>
                <span className={`absolute w-full border-b border-dashed ${index % 2 === 0 ? 'top-12' : 'bottom-14'}`}></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryTimeLine;
