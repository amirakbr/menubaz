import { IFeatureCardProps, IFeatureData } from '../../interface';

export const FeatureCard = ({ description, summary, title, icon: Icon }: IFeatureData) => {
  return (
    <div className="flex flex-col lg:items-center lg:text-center bg-white-200 rounded-xl gap-2 px-6 py-5 lg:px-4 lg:py-10 ">
      <div className="flex flex-row lg:flex-col items-center gap-2">
        <Icon />
        <div className="flex flex-col gap-1 items-start text-right lg:text-center">
          <h3 className="text-sm text-title w-full">{title}</h3>
          <p className="text-xs text-subtitle-400 w-full">{summary}</p>
        </div>
      </div>
      <p className="text-gray-600 font-normal text-xs">{description}</p>
    </div>
  );
};
