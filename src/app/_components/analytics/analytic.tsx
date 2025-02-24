import Analytics from './_components/analytic';
import AnalyticsImage from './_components/analyticsImage';

const AnalyticsSection = () => {
  return (
    <div className="flex flex-col gap-12">
      <Analytics />
      <AnalyticsImage />
    </div>
  );
};

export default AnalyticsSection;
