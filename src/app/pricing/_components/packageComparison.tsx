'use client';

import { useState } from 'react';
import GroupButton from './groupButton';
import PackageComparisonHeader from './packageComparisonHeader';
import { packageData } from './packageData';
import PackageComparisonDetailContainer from './packageComparisonDetailContainer';
import { IPackagesData } from '../interface';
import useMediaQuery from '@/app/hook/useMediaQuery';

const PackageComparison = () => {
  const [selectedPackagePeriod, setSelectedPackagePeriod] = useState('monthly');
  const [selectedPackage, setSelectedPackage] = useState<IPackagesData | undefined>(packageData?.find(({ isSpecial }) => isSpecial));
  const { isWidthLarger } = useMediaQuery({ minWidth: 770 });
  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className={`flex ${isWidthLarger ? 'flex-row justify-between' : 'flex-col'} gap-4 items-center`}>
          <div className="flex flex-col items-center text-center gap-4 shrink-0 w-[23rem]">
            <p className="text-sm font-semibold text-title">مدت سرویس مورد نظر خود را انتخاب کنید</p>
            <div className="flex items-center gap-1">
              <GroupButton selectedButton={selectedPackagePeriod} setSelectedButton={setSelectedPackagePeriod} />
              {selectedPackagePeriod === 'yearly' ? <p className="text-xs font-medium text-complementary animate-appear">20% تخفیف سالانه</p> : null}
            </div>
          </div>
          <div className="w-full">
            <PackageComparisonHeader
              selectedPeriod={selectedPackagePeriod}
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
              isWidthLarger={isWidthLarger}
            />
          </div>
        </div>
        <PackageComparisonDetailContainer selectedPackage={selectedPackage} isWidthLarger={isWidthLarger} />
      </div>
    </>
  );
};

export default PackageComparison;
