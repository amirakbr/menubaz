import FavoriteChart from '@/app/public/icons/favoriteChart';
import LikeIcon from '@/app/public/icons/likeIcon';
import MedalStarIcon from '@/app/public/icons/medalStarIcon';
import MinimalPeopleIcon from '@/app/public/icons/minimaPeoplesIcon';
import MinimalLogo from '@/app/public/logo/minimalLog';

const analysisData = [
  {
    label: 'تیم منوباز',
    analysis: '20',
    icon: MinimalPeopleIcon,
  },
  {
    label: 'مشتریان',
    analysis: '7000',
    icon: LikeIcon,
  },
  {
    label: 'سال سابقه',
    analysis: '10',
    icon: FavoriteChart,
  },
  {
    label: 'نمایندگی فعال',
    analysis: '40',
    icon: MedalStarIcon,
  },
];

const Analysis = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-7 items-center md:w-min md:m-auto ">
      <div className="flex items-center justify-center gap-5 md:gap-20 px-3 py-7 md:py-10 md:px-16 bg-white-200 rounded-lg md:w-max">
        {analysisData.map(({ analysis, icon: Icon, label }, index) => {
          return (
            <div className="flex flex-col items-center gap-4" key={`analysis data ${index}`}>
              <span className="text-2xl md:text-4xl ltr font-bold bg-gradient-to-b from-[#5B21FF] to-[#361499] bg-clip-text text-transparent">
                +{analysis}
              </span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 md:h-5 md:w-5">
                  <Icon height={'100%'} width={'100%'} />
                </div>
                <span className="text-xs md:text-sm text-title-400">{label}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7">
        <div className="min-h-[11.5rem] bg-[url(/aboutUs/programmer.png)] bg-cover bg-no-repeat bg-center rounded-lg overflow-hidden"></div>
        <div className="bg-white-200 rounded-lg flex flex-col gap-1 md:gap-3 py-4 px-7 md:py-6 md:px-8 md:items-center md:text-center">
          <div className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-md bg-primary">
            <span className="w-[12.79px] h-[7.7px] lg:w-[18.5px] lg:h-[11.14px]">
              <MinimalLogo width={'100%'} height={'100%'} />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-title font-semibold text-xs md:text-sm">قدرت فناوری در خدمت کسب‌وکار شما</h3>
            <h4 className="text-xs text-subtitle leading-5">
              هر رستوران داستان خودش را دارد و ما در منوباز آن را درک می‌کنیم. با فناوری‌های پیشرفته و شناخت نیازهای بازار، ابزارهایی طراحی کرده‌ایم
              که مدیریت و رشد کسب‌وکار شما را ساده‌تر کند. چه تازه شروع کرده باشید یا سال‌ها تجربه داشته باشید، ما همراه شما هستیم.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
