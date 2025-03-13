'use client';

import ArrowDownIcon from '@/app/public/icons/arrowDownIcon';
import { useState } from 'react';
import { ITabConfigProps } from './tabConfig';

const Menu = ({ label, subMenu }: { label: string; subMenu: ITabConfigProps['subMenu'] }) => {
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
        <div className="absolute top-full rounded-lg p-2 bg-white-100 shadow-xl min-w-64 border border-gray-100 animate-appear">
          {subMenu?.map(({ label, icon: Icon }, index) => (
            <p className="px-3 py-2 text-sm	font-medium flex items-center gap-2 group cursor-pointer" key={`sub menu ${index}`}>
              {Icon ? (
                <span className="group-hover:text-primary transition-all">
                  <Icon height={25} width={25} primaryColor="currentColor" />
                </span>
              ) : null}

              <span className="text-subtitle-600 group-hover:text-title-900 transition-all">{label}</span>
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
