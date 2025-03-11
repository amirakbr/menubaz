import Button from '@/app/commonComponents/button';
import { IAnalyticsBarProps } from '../interface';

const AnalyticsBar = ({ analyticsBarData, feature, setFeature }: IAnalyticsBarProps) => {
  return (
    <div className="flex items-center gap-1 p-2 rounded-xl bg-white-200 w-max m-auto">
      {analyticsBarData?.map(({ label, name }) => (
        <Button
          size="small"
          variant={feature === name ? `contained` : 'text'}
          color='secondary'
          onClick={() => {
            if (feature !== name) {
              setFeature?.(name);
            }
          }}
          key={`feature ${name}`}
        >
          <p className={`flex flex-col relative text-xs xl:text-sm ${feature === name ? 'after:content-[" "] after:w-4 after:border-b after:border-b-primary after:top-[1px] after:relative' : 'text-title-400'}`}>{label}</p>
        </Button>
      ))}
    </div>
  );
};

export default AnalyticsBar;
