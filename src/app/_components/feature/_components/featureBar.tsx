import Button from '@/app/commonComponents/button';
import { IFeatureBarProps } from '../interface';

const FeatureBar = ({ featureBarData, feature, setFeature }: IFeatureBarProps) => {
  return (
    <div className="flex items-center gap-1 p-2 rounded-xl bg-white-200">
      {featureBarData?.map(({ label, name }) => (
        <Button
          size="sm"
          color={feature === name ? `secondary` : 'secondary'}
          onClick={() => {
            if (feature !== name) {
              setFeature?.(name);
            }
          }}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default FeatureBar;
