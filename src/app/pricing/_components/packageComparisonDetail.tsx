import ArrowDownIcon from '@/app/public/icons/arrowDownIcon';
import { useState } from 'react';
import { IPackageComparisonDetailProps } from '../interface';

const PackageComparisonDetail = ({ isDefaultOpen = false, children, title }: IPackageComparisonDetailProps) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  return (
    <div className={`rounded-lg overflow-hidden border-white-200 ${isOpen ? 'border' : 'border-0'}`}>
      <div
        className="flex items-center justify-between p-2 px-5 bg-white-300 rounded-b-lg"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-sm font-semibold text-title xl:text-2xl">{title}</p>
        <span className={`${isOpen ? 'rotate-[180deg]' : 'rotate-0'} transition-all`}>
          <ArrowDownIcon width={24} height={24} primaryColor="#262626" />
        </span>
      </div>
      <div className={`grid ${isOpen ? 'h-full overflow-auto' : 'h-0 overflow-hidden'}`}>
        <div className={`transition-all grid grid-cols-1 origin-top ${isOpen ? 'scale-y-1' : 'scale-y-0 overflow-hidden'}`}>{children}</div>
      </div>
    </div>
  );
};

export default PackageComparisonDetail;
