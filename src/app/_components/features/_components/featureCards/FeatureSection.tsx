import { FeatureCard } from './featureCard';
import featuresData from './featuresData';

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-title text-2xl font-bold text-center xl:text-3xl">با منوباز همه چیز در دسترس شماست!!!</h2>
      <p className="text-subtitle-400 text-xl text-center max-w-[684px]">
        دیگر نیازی به پرداخت هزینه برای افزونه‌های جانبی مانند باشگاه مشتریان و منوی دیجیتال ندارید؛ زیرا تمامی ابزارهای ضروری برای مدیریت رستوران شما
        به‌صورت یکپارچه در پلتفرم جامع منوباز فراهم شده است.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4">
        {featuresData?.map(({ description, summary, title, icon }, index) => (
          <FeatureCard description={description} summary={summary} title={title} key={`feature card ${index}`} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
