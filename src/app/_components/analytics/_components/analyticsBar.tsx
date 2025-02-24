import Button from '@/app/commonComponents/button';
import { IAnalyticsBarProps } from '../interface';

const AnalyticsBar = ({ analyticsBarData, feature, setFeature }: IAnalyticsBarProps) => {
  return (
    <div className="flex items-center gap-1 p-2 rounded-xl bg-white-200 w-max m-auto">
      {analyticsBarData?.map(({ label, name }) => (
        <Button
          size="small"
          variant={feature === name ? `secondary` : 'none'}
          onClick={() => {
            if (feature !== name) {
              setFeature?.(name);
            }
          }}
          key={`feature ${name}`}
        >
          <p className="flex flex-col relative">{label}</p>
        </Button>
      ))}
    </div>
  );
};

export default AnalyticsBar;
