import { FeatureCard } from './featureCard';
import featuresData from './featuresData';

const FeatureSection = () => {
  return (
    <>
      {featuresData?.map(({ description, summary, title }, index) => (
        <FeatureCard description={description} summary={summary} title={title} key={`feature card ${index}`} />
      ))}
    </>
  );
};

export default FeatureSection;
