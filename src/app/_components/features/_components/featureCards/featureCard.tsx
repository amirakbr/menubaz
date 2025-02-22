import { IFeatureCardProps, IFeatureData } from '../../interface';

export const FeatureCard = ({ description, summary, title, icon: Icon }: IFeatureData) => {
  return (
    <div className="flex flex-col sm:items-center sm:text-center bg-white-200 p-6 rounded-xl gap-2">
      <div className="flex items-center gap-2">
        <Icon />
        <div className="flex flex-col gap-1 items-start">
          <h3 className="text-lg font-medium text-title">{title}</h3>
          <p className="text-gray-500 text-subtitle-400">{summary}</p>
        </div>
      </div>
      <p className="text-gray-600 ">{description}</p>
    </div>
  );
};
