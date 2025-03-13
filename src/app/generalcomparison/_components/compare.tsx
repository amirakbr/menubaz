'use client';

import Button from '@/app/commonComponents/button';
import Logo from '@/app/public/logo/logo';
import { useState } from 'react';
import CompareTable from './compareTable';

const compareData = [
  {
    label: 'باشگاه مشتریان',
    name: 'customerClub',
  },
  {
    label: 'انبار داری',
    name: 'warehouse',
  },
  {
    label: 'منودیجیتال و سفارش گیری ',
    name: 'digitalMenu',
  },
  {
    label: 'مدیریت و حسابداری',
    name: 'accountant',
  },
];

const data = [
  {
    feature: 'دسترسی آنلاین و آسان به سیستم',
    menubaz: true,
    sibiz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'رابط کاربری ساده و کاربرپسند',
    menubaz: true,
    sibiz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
  {
    feature: 'مدیریت حقوق و دستمزد پرسنل',
    menubaz: true,
    sibiz: false,
    baran: false,
    mayra: true,
    mahak: false,
  },
];

const Compare = () => {
  const [compare, setCompare] = useState(compareData?.[0]?.name);
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-3xl text-title font-semibold text-center">مقایسه کنید</h3>
      <div className="flex items-center gap-1 p-2 rounded-xl bg-white-200 w-max m-auto">
        {compareData?.map(({ label, name }) => (
          <Button
            variant={compare === name ? `contained` : 'text'}
            color="secondary"
            onClick={() => {
              if (compare !== name) {
                setCompare?.(name);
              }
            }}
            key={`feature ${name}`}
          >
            <p
              className={`flex flex-col relative text-xs xl:text-sm ${
                compare === name
                  ? 'after:content-[" "] after:w-4 after:border-b after:border-b-primary after:top-[1px] after:relative after:transition-all hover:after:w-full'
                  : 'text-title-400'
              }`}
            >
              {label}
            </p>
          </Button>
        ))}
      </div>
      <CompareTable />
      <div className="flex flex-col gap-4 items-center">
        <p className="text-title text-xl font-semibold text-center">منوباز را مقایسه کنید با :</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-center">
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با هلو</span>
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با سپیدز</span>
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با سپیدار</span>
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با محک</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با پارمیس</span>
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با زعفران</span>
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با کسبه</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه باران</span>
            <span className="bg-white-200 rounded-xl p-1 text-subtitle-400 font-medium text-sm">منوباز در مقایسه با ماپرا</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
