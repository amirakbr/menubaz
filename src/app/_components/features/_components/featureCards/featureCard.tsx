import { IFeatureCardProps, IFeatureData } from '../../interface';

export const FeatureCard = ({ description, summary, title }: IFeatureData) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg">
      {/* <div className="text-yellow-500 text-4xl mb-4">{icon}</div> */}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-gray-500 text-xs mt-2">{summary}</p>
    </div>
  );
};
