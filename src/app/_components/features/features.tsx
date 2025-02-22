import CallToAction from './_components/callToAction/callToAction';
import FeatureSection from './_components/featureCards/FeatureSection';

const Features = () => {
  return (
    <div className="flex flex-col gap-8">
      <FeatureSection />
      <CallToAction />
    </div>
  );
};

export default Features;
