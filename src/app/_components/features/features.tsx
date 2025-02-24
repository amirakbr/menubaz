import CallToAction from './_components/callToAction/callToAction';
import FeatureSection from './_components/featureCards/FeatureSection';

const Features = () => {
  return (
    <div className="flex flex-col gap-12 xl:gap-[200px]">
      <FeatureSection />
      <CallToAction />
    </div>
  );
};

export default Features;
