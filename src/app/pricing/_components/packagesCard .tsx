'use client';

import { useState } from 'react';
import GroupButton from './groupButton';
import { thousandSeparator } from '@/app/tools';
import Button from '@/app/commonComponents/button';
import TickIcon from '@/app/public/icons/tick';
import ArrowDown from '@/app/public/icons/arrowDown';
import { packageData } from './packageData';
import useMediaQuery from '@/app/hook/useMediaQuery';
import InfoIcon from '@/app/public/icons/info';

const PackagesCard = () => {
  const [selectedButton, setSelectedButton] = useState('yearly');
  const { isWidthLarger } = useMediaQuery({ minWidth: 1280 });
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1 items-center">
        {selectedButton === 'yearly' ? <p className="text-xs font-semibold text-complementary animate-appear">20% تخفیف سالانه</p> : null}
        <GroupButton selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {packageData?.map(({ actualPrice, feature, isSpecial, off, price, subtitle, title, featureTitle }, index) => {
          return (
            <div
              className={`bg-whiteBlack-100 border ${isSpecial ? 'border-primary' : 'border-white-600'} rounded-xl overflow-hidden`}
              key={`packages card ${index}`}
            >
              <div className={`p-5 py-8 flex flex-col gap-8 ${!isSpecial ? 'bg-white-200' : 'bg-gradient-to-t from-primary/0 to-primary'}`}>
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-title font-semibold xl:text-2xl">{title}</p>
                  <p className="text-subtitle text-xs">{subtitle}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {selectedButton === 'yearly' ? (
                    <div className="flex items-center gap-2">
                      <del className="text-subtitle-300 text-xl">
                        <span className="text-xl text-subtitle-300">{thousandSeparator(price)}</span>{' '}
                      </del>
                      <span className="text-whiteBlack-100 rounded-xl bg-complementary px-2 py-0.5">%{off}</span>
                    </div>
                  ) : null}
                  <p>
                    <span className="text-2xl text-title font-medium">{thousandSeparator(selectedButton === 'yearly' ? actualPrice : price)}</span>{' '}
                    <span className="text-base font-normal text-title">تومان</span>
                  </p>
                </div>
                <Button variant={isSpecial && isWidthLarger ? 'secondary' : 'outline'}>شروع کنید</Button>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <p className="font-medium text-sm text-title">{featureTitle}</p>
                <div className="flex flex-col gap-1">
                  {feature?.map(({ label, hadMoreInfo }, featureIndex) => (
                    <div className="flex items-center gap-1" key={`package feature ${featureIndex} ${index}`}>
                      <span className="w-3 h-3 rounded-full bg-primary-300 flex items-center justify-center shrink-0">
                        <TickIcon width={5.48} height={4.08} primaryColor="#332C07" />
                      </span>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-xs text-title-400">{label}</p>
                        {hadMoreInfo ? <InfoIcon /> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 justify-center text-center">
        <span className="text-xs font-medium text-title">مقایسه را ببینید</span>
        <span className="animate-bounce">
          <ArrowDown />
        </span>
      </div>
    </div>
  );
};

export default PackagesCard;
