import Button from '@/app/commonComponents/button';
import { IHowItWorksDataProps } from '../interface';

const HowItWorksContent = ({ content, index, title }: Omit<IHowItWorksDataProps, 'imageSrc'>) => {
  let str = '' + ++index;
  let pad = '00';
  let stepIndex = pad.substring(0, pad.length - str.length) + str;
  return (
    <div className={`order-2 md:order-[unset] ${index % 2 === 0 ? '!order-2' : ''}`}>
      <div className="flex flex-col gap-4 max-w-[35rem]">
        <div className="flex flex-col">
          <span className="text-gray-300 text-2xl">{stepIndex}</span>
          <h4 className="text-2xl text-title font-semibold">{title}</h4>
        </div>
        <p className="text-base text-subtitle">{content}</p>
        <Button className="w-max" size="small" variant="secondary">
        کسب اطلاعات بیشتر
        </Button>
      </div>
    </div>
  );
};

export default HowItWorksContent;
