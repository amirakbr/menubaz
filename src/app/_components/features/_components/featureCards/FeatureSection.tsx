import { FeatureCard } from './featureCard';
import featuresData from './featuresData';

const FeatureSection = () => {
  return (
    <div className='flex flex-col gap-4'>
      {featuresData?.map(({ description, summary, title }, index) => (
        <FeatureCard description={description} summary={summary} title={title} key={`feature card ${index}`} />
      ))}
    </div>
  );
};

export default FeatureSection;
