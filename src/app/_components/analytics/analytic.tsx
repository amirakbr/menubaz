import Analytics from './_components/analytic';
import AnalyticsImage from './_components/analyticsImage';

const FeatureSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Analytics />
      <AnalyticsImage />
    </div>
  );
};

export default FeatureSection;
