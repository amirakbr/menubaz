import Button from '@/app/commonComponents/button';
import { IBenefitsCardProps } from '@/app/digitalmenu/interface';
import Image from 'next/image';

const Card = ({ data, selectedTabIndex }: IBenefitsCardProps) => {
  const { description, subTitle, title } = data;
  return (
    <div className="flex flex-col gap-14">
      <div className='flex items-center justify-center'>
      <div className="w-[360px] h-[240px] bg-white-400 relative rounded-xl">
        <div className="relative rounded-xl translate-x-4 translate-y-4 rounded-xl overflow-hidden w-full h-full">
          <Image fill alt="" src={'/digitalMenu/close-up-woman-receiving-package.webp'} />
        </div>
      </div>
      </div>
      <div className="flex flex-col gap-6 animate-appear " key={`selected tab index for beneficiary card ${selectedTabIndex}`}>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold text-title">{title}</p>
          <p className="text-subtitle-400 text-xl ">{subTitle}</p>
          <p className="text-title text-2xl font-medium">{description}</p>
        </div>
        <Button variant="secondary" className="w-max">
          کسب اطلاعات بیشتر
        </Button>
      </div>
    </div>
  );
};

export default Card;
