import { ITabProps } from '@/app/digitalmenu/interface';

const HorizontalTab = ({ selectedTabIndex }: ITabProps) => {
  return (
    <div className="w-max relative flex items-center">
      {/* line */}
      <span className="w-32 h-1 bg-white-300"></span>

      {/* filledLine */}
      <span className="absolute top-0 right-0 h-full h-1 bg-primary animate-filledLine"></span>

      {/* first dot */}
      <span className="w-3 h-3 bg-primary absolute top-1/2 right-0 bg-primary -translate-y-1/2 rounded-full"></span>
      {/* second dot */}
      <span
        className={`w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all ${
          selectedTabIndex === 1 ? 'bg-primary' : 'bg-white-300'
        }`}
      ></span>
    </div>
  );
};

export default HorizontalTab;
