'use client';

import ArrowDownIcon from '@/app/public/icons/arrowDownIcon';
import { useState } from 'react';

const Menu = ({ label, subMenu }: { label: string; subMenu: { label: string }[] }) => {
  const [isSubMenuOpen, setIsSUbMenuOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsSUbMenuOpen(true);
      }}
      onMouseLeave={() => {
        setIsSUbMenuOpen(false);
      }}
    >
      <div className="flex items-center gap-2 py-2 px-3 cursor-pointer">
        <p className="text-sm	font-medium">{label}</p>
        <div className={`transition-all ${isSubMenuOpen ? 'rotate-180' : ''}`}>
          <ArrowDownIcon />
        </div>
      </div>
      {isSubMenuOpen ? (
        <div className="absolute top-full rounded-lg p-4 bg-white-100 shadow-xl min-w-64 border border-gray-100 animate-appear">
          {subMenu?.map(({ label }, index) => (
            <p className="px-3 py-2 text-sm	font-medium" key={`sub menu ${index}`}>
              {label}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
