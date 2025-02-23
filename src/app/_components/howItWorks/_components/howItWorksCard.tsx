import Image from 'next/image';
import { IHowItWorksData, IHowItWorksDataProps } from '../interface';
import HowItWorksContent from './howItWorksContent';
import HowItWorksImage from './howItWorksImage';

const HowItWorksCard = ({ content, imageSrc, title, index }: IHowItWorksDataProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-4 md:gap-32 justify-evenly items-center">
      <HowItWorksContent content={content} title={title} index={index} />
      <HowItWorksImage imageSrc={imageSrc} index={index} />
    </div>
  );
};

export default HowItWorksCard;
