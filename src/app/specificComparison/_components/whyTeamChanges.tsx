import Arrow3Icon from '@/app/public/icons/arrow3';
import FavoriteChart from '@/app/public/icons/favoriteChart';
import MagicStarIcon from '@/app/public/icons/magicStar';
import SlackIcon from '@/app/public/icons/slackIcon';

const data = [
  {
    title: 'یک محلول کاملاً با برچسب سفید',
    subtitle:
      'فرم‌ها و برنامه‌هایی بسازید که واقعاً نشان‌دهنده برند شما هستند - با دامنه‌های سفارشی نامحدود، گزینه‌های طراحی قابل تنظیم و تجربه کاملاً با برچسب سفید.',
    description:
      'با تنظیم فرم ها با پاسخ های آنها با استفاده از منطق پیشرفته، برای هر مشتری تجربیات شخصی ایجاد کنید. با ادغام یکپارچه با ابزارهایی که از قبل استفاده می کنید، گردش کار را ساده کنید و در زمان صرفه جویی کنید.',
    icon: MagicStarIcon,
  },
  {
    title: 'دسترسی مشتری با پورتال های مارک دار',
    subtitle:
      'به مشتریان خود با پورتال های مارک دار که شامل ورود و ثبت نام ایمن می شود، به همه چیزهایی که نیاز دارند دسترسی داشته باشند. منوباز به شما امکان می دهد دسترسی فقط عضویت را تنظیم کنید.',
    description:
      'کنترل دید با تنظیمات پیشرفته برای نمایش یا پنهان کردن صفحات بر اساس نقش های کاربر یا وضعیت ورود به سیستم. با حفظ امنیت سطح بالا، مجوزهای مشتریان، اعضای تیم و مدیران را مدیریت کنید.',
    icon: FavoriteChart,
  },
  {
    title: 'ایجاد گردش کار کامل',
    subtitle:
      'بر خلاف رویکرد فرم به صفحه گسترده سپیدز، منوباز به شما امکان می دهد CRM های سفارشی، پورتال های مشتری و گردش کار را بدون کد ایجاد کنید.',
    description:
      'با منطق پیشرفته، ایمیل های مشروط، و گردش کار سفارشی، همراه با امضاهای الکترونیکی و تولید PDF، منوباز برای فرآیندهای پیچیده و خودکار مناسب تر است.',
    icon: Arrow3Icon,
  },
  {
    title: 'با تجزیه و تحلیل هوش مصنوعی ',
    subtitle:
      'اجازه دهید هوش مصنوعی بر اساس داده‌های جمع‌آوری‌شده‌تان، بینش‌های عملی ارائه دهد - تحلیل‌های هم‌زمان از روندهای مشتری، الگوهای احساسات و فرصت‌های نوظهور دریافت کنید. داشبوردهای سفارشی ایجاد کنید که داده‌های شما را تجسم می‌کند، KPIهای حیاتی را ردیابی می‌کند',
    description: '',
    icon: SlackIcon,
  },
];

const WhyTeamChanges = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-4 items-center">
        <p className="max-w-[825px] text-3xl font-bold text-title">ویژگی های کلیدی که باعث می شود تیم ها از سپیدز جابجا شوند</p>
        <p className="max-w-[477px] text-base font-medium text-subtitle-400">
          منوباز ابزارهای قدرتمندی را برای جمع آوری، تجزیه و تحلیل و عمل بر روی داده های خود در اختیار شما قرار می دهد - همه در یک پلت فرم یکپارچه.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {data?.map(({ description, icon: Icon, subtitle, title }, index) => (
          <div className="bg-white-100 rounded-xl p-6 pb-0" key={`card ${index}`}>
            <div className="flex items-start justify-between gap-20">
              <div className="flex flex-col gap-10 max-w-[529px]">
                <div className="flex flex-col gap-4">
                  <Icon height={36} width={36} primaryColor="#FFDE21" />
                  <p className="text-title text-2xl font-semibold ">{title}</p>
                  <p className="text-base font-medium text-subtitle">{subtitle}</p>
                </div>
                <p className="text-subtitle font-medium text-base">{description}</p>
              </div>
              <div className="w-[579px] h-[361px] bg-whiteBlack-100 border-2 border-[#EFEFEF] rounded-lg border-b-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTeamChanges;
