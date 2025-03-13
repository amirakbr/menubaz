import { packageData } from './packageData';
import Button from '@/app/commonComponents/button';
import { IPackageComparisonHeaderProps } from '../interface';
import { thousandSeparator } from '@/app/tools';

const PackageComparisonHeader = ({ selectedPeriod, setSelectedPackage, selectedPackage, isWidthLarger }: IPackageComparisonHeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white-200 rounded-lg py-5 px-2 xl:px-4">
        <div className="grid grid-cols-4 gap-1 md:gap-4">
          {packageData?.map(({ title, off, isSpecial }, index) => (
            <div className="flex flex-col gap-2.5 items-center text-center" key={`package comparison header button ${index}`}>
              <p className={`text-xs xl:text-xl ${isSpecial ? 'text-title' : 'text-title-400'}`}>{title}</p>
              <Button
                variant={isSpecial ? 'contained' : 'outlined'}
                color={'secondary'}
                className="!p-1 !py-0 w-full md:!py-2"
                size="small"
                onClick={() => {
                  if (!isWidthLarger) {
                    setSelectedPackage(packageData[index]);
                  }
                }}
              >
                <p className={`${isSpecial ? 'text-whiteBlack-100' : 'text-title-400'} text-8 md:text-xs`}>
                  شروع کنید{' '}
                  {selectedPeriod === 'yearly' ? (
                    <span className={`animate-appear ${isSpecial ? 'text-primary' : 'text-complementary'}`}>%{off} تخفیف</span>
                  ) : null}
                </p>
              </Button>
            </div>
          ))}
        </div>
      </div>
      {selectedPackage && !isWidthLarger ? (
        <div className="border border-white-600 rounded-lg py-6 px-12 flex items-center justify-center">
          <div className="flex justify-between gap-36">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-title-400">مدت</p>
              <p className="text-base font-medium text-complementary">{selectedPeriod === 'yearly' ? 'سالانه' : 'ماهانه'}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-title-400">قیمت</p>
              <div className="flex flex-col gap-1">
                {selectedPeriod === 'yearly' ? (
                  <div className="flex items-center gap-2">
                    <del className="text-subtitle-300 text-xl">
                      <span className="text-sm text-subtitle-300">{thousandSeparator(selectedPackage?.price)}</span>{' '}
                    </del>
                    <span className="text-whiteBlack-100 rounded-xl bg-complementary px-2 py-0.5 text-xs">%{selectedPackage?.off}</span>
                  </div>
                ) : null}
                <p className="flex items-center gap-1">
                  <span className="text-base text-title font-medium">
                    {thousandSeparator(selectedPeriod === 'yearly' ? selectedPackage?.actualPrice : selectedPackage?.price)}
                  </span>{' '}
                  <span className="text-xs font-normal text-title">تومان</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PackageComparisonHeader;
