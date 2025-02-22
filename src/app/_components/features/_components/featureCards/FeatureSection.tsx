import { FeatureCard } from './featureCard';
import featuresData from './featuresData';

const FeatureSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-title text-2xl font-semibold text-center">با منوباز همه چیز در دسترس شماست!!!</h2>
      <p className="text-subtitle-400 text-lg text-center">
        دیگر نیازی به پرداخت هزینه برای افزونه‌های جانبی مانند باشگاه مشتریان و منوی دیجیتال ندارید؛ زیرا تمامی ابزارهای ضروری برای مدیریت رستوران شما
        به‌صورت یکپارچه در پلتفرم جامع منوباز فراهم شده است.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {featuresData?.map(({ description, summary, title, icon }, index) => (
          <FeatureCard description={description} summary={summary} title={title} key={`feature card ${index}`} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
