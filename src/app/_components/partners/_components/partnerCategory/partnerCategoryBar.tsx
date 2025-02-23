import Button from '@/app/commonComponents/button';
import {partnerCategoryBarData} from './partnerCategoryData';
import { IPartnerCategoryBarProps } from '../../interface';

const PartnerCategoryBar = ({ selectedTab, setSelectedTab }: IPartnerCategoryBarProps) => {
  return (
    <>
      <div className='flex justify-center '>
      <div className="flex items-center gap-1 p-2 rounded-xl bg-white-200">
        {partnerCategoryBarData?.map(({ label, name }) => (
          <Button
            size="small"
            variant={selectedTab === name ? `secondary` : 'none'}
            onClick={() => {
              if (selectedTab !== name) {
                setSelectedTab?.(name);
              }
            }}
            key={`feature ${name}`}
          >
            {label}
          </Button>
        ))}
      </div>
      </div>
    </>
  );
};

export default PartnerCategoryBar;
