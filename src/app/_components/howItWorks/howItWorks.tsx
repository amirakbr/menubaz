import HowItWorksCard from './_components/howItWorksCard';
import howItWorksData from './_components/howItWorksData';

const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-16">
      {howItWorksData.map(({ content, imageSrc, title }, index) => (
        <HowItWorksCard key={`how it works card ${index}`} content={content} imageSrc={imageSrc} index={index} title={title} />
      ))}
    </div>
  );
};

export default HowItWorks;
