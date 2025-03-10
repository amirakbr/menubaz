import PackageComparisonDetail from './packageComparisonDetail';
import { packageComparison } from './packageData';
import { IPackageComparisonDetailContainerProps } from '../interface';
import TickIcon from '@/app/public/icons/tick';
import CloseCircle from '@/app/public/icons/closeCircle';
import React, { useState } from 'react';
import Button from '@/app/commonComponents/button';

const FeatureAvailable = ({ value }: { value: boolean }) => (
  <span className="w-full sm:min-w-20 flex items-center justify-center">
    <span className={`w-7 h-7 rounded-full flex items-center justify-center ${value ? 'bg-primary-300' : ''}`}>
      {value ? (
        <TickIcon width={13.79} height={9.53} primaryColor="#332C07" />
      ) : (
        <CloseCircle width={'100%'} height={'100%'} primaryColor="#BDBDBD" />
      )}
    </span>
  </span>
);

const renderFeature = (isWidthLarger: boolean, featureValue: boolean, selectedPackageName?: string, featureName?: string) => {
  return isWidthLarger || selectedPackageName === featureName ? <FeatureAvailable value={featureValue} /> : null;
};

const PackageComparisonDetailContainer = ({ isWidthLarger, selectedPackage }: IPackageComparisonDetailContainerProps) => {
  const [isFullView, setIsFullView] = useState(false);

  return (
    <div className="relative flex flex-col gap-16">
      <div className={`${isFullView ? 'h-full' : 'h-40 overflow-hidden'} relative`}>
        <div className="w-full h-auto flex flex-col gap-4">
          <PackageComparisonDetail isDefaultOpen={true} title="منوی دیجیتال">
            <div className="grid grid-cols-[auto_1fr]">
              {packageComparison?.digitalMenu?.map(({ baseMenu, feature, proMenu, standardMenu, visualMenu }, index) => (
                <React.Fragment key={`package comparison for digital menu ${index}`}>
                  <p
                    className={`text-sm xl:text-base text-subtitle font-medium shrink-0 min-w-20 p-3 xl:py-4 xl:px-2 ${
                      isWidthLarger ? '!pl-20' : 'pr-2'
                    } ${index === 1 ? 'bg-white-200' : 'bg-whiteBlack-100'}`}
                  >
                    {feature}
                  </p>
                  <div
                    className={`grid ${index === 1 ? 'bg-white-200' : 'bg-whiteBlack-100'} ${
                      isWidthLarger ? 'grid-cols-4  border-r border-r-white' : 'grid-cols-1'
                    }`}
                  >
                    {renderFeature(isWidthLarger, visualMenu, selectedPackage?.name, 'visualMenu')}
                    {renderFeature(isWidthLarger, baseMenu, selectedPackage?.name, 'baseMenu')}
                    {renderFeature(isWidthLarger, standardMenu, selectedPackage?.name, 'standardMenu')}
                    {renderFeature(isWidthLarger, proMenu, selectedPackage?.name, 'proMenu')}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </PackageComparisonDetail>
          <PackageComparisonDetail isDefaultOpen={false} title="سفارش گیر">
            <div className="grid grid-cols-[auto_1fr]">
              {packageComparison?.ordering?.map(({ baseMenu, feature, proMenu, standardMenu, visualMenu }, index) => (
                <React.Fragment key={`package comparison for ordering ${index}`}>
                  <p
                    className={`text-sm xl:text-base text-subtitle font-medium shrink-0 min-w-20 p-3 xl:py-4 xl:px-2 ${
                      isWidthLarger ? '!pl-20' : 'pr-2'
                    } ${index === 1 ? 'bg-white-200' : 'bg-whiteBlack-100'}`}
                  >
                    {feature}
                  </p>
                  <div
                    className={`grid ${index === 1 ? 'bg-white-200' : 'bg-whiteBlack-100'} ${
                      isWidthLarger ? 'grid-cols-4  border-r border-r-white' : 'grid-cols-1'
                    }`}
                  >
                    {renderFeature(isWidthLarger, visualMenu, selectedPackage?.name, 'visualMenu')}
                    {renderFeature(isWidthLarger, baseMenu, selectedPackage?.name, 'baseMenu')}
                    {renderFeature(isWidthLarger, standardMenu, selectedPackage?.name, 'standardMenu')}
                    {renderFeature(isWidthLarger, proMenu, selectedPackage?.name, 'proMenu')}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </PackageComparisonDetail>
        </div>
        {!isFullView ? <div className="w-full h-full top-0 left-0 bg-gradient-to-t from-whiteBlack-100 to-whiteBlack-100/0 absolute"></div> : null}
      </div>
      {!isFullView ? (
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            className="mx-auto w-max"
            onClick={() => {
              setIsFullView(true);
            }}
          >
            مشاهده همه
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default PackageComparisonDetailContainer;
