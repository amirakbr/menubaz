import Image from 'next/image';
import { IHowItWorksDataProps } from '../interface';

const HowItWorksImage = ({ imageSrc, index }: Pick<IHowItWorksDataProps, 'imageSrc' | 'index'>) => {
  return (
    <div className={`flex justify-center relative md:bg-white-400 rounded-lg order-1 md:order-[unset] ${index % 2 === 0 ? '!order-1' : ''}`}>
      <div className="rounded-lg overflow-hidden relative md:top-4 md:left-4 md:hover:-left-4 md:hover:-top-4 transition-all max-w-[21rem]">
        <Image src={imageSrc} alt={`${imageSrc.replace('/howItWorks', '')} image`} width={380} height={350} />
      </div>
    </div>
  );
};

export default HowItWorksImage;
