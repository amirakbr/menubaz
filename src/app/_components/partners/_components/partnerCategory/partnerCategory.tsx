'use client';

import { useState } from 'react';
import PartnerCategoryBar from './partnerCategoryBar';
import PartnerCategoryCard from './partnerCategoryCard';
import { IPartnerCategoryCardProps } from '../../interface';

const PartnerCategory = () => {
  const [selectedTab, setSelectedTab] = useState<IPartnerCategoryCardProps['selectedTab']>('restaurant');
  return (
    <div className="flex flex-col gap-8">
      <PartnerCategoryBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <PartnerCategoryCard selectedTab={selectedTab} />
    </div>
  );
};

export default PartnerCategory;
