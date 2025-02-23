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
          <span className="text-black-300">{stepIndex}</span>
          <h4 className="text-lg text-title font-semibold">{title}</h4>
        </div>
        <p className="text-sm text-subtitle">{content}</p>
        <Button className="w-max" size="small" variant="secondary">
          اطلاعات بیشتر
        </Button>
      </div>
    </div>
  );
};

export default HowItWorksContent;
