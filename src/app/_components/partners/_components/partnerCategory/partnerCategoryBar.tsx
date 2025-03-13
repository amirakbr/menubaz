import Button from '@/app/commonComponents/button';
import { partnerCategoryBarData } from './partnerCategoryData';
import { IPartnerCategoryBarProps } from '../../interface';

const PartnerCategoryBar = ({ selectedTab, setSelectedTab }: IPartnerCategoryBarProps) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex items-center gap-1 p-2 rounded-xl bg-white-200">
          {partnerCategoryBarData?.map(({ label, name }) => (
            <Button
              size="small"
              variant={selectedTab === name ? `contained` : 'text'}
              color="secondary"
              onClick={() => {
                if (selectedTab !== name) {
                  setSelectedTab?.(name);
                }
              }}
              key={`feature ${name}`}
            >
              <p
                className={`flex flex-col relative text-xs xl:text-sm ${
                  selectedTab === name
                    ? 'after:content-[" "] after:w-4 after:border-b after:border-b-primary after:top-[1px] after:relative after:transition-all hover:after:w-full'
                    : 'text-title-400'
                }`}
              >
                {label}
              </p>{' '}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnerCategoryBar;
