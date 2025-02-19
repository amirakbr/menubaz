'use client';

import { useState } from 'react';
import AnalyticsBarButtons from './analyticsBar';
import analyticsBarData from './analyticsBarData';

const AnalyticsBar = () => {
  const [feature, setFeature] = useState(analyticsBarData[0]?.name);
  return (
    <>
      <AnalyticsBarButtons analyticsBarData={analyticsBarData} feature={feature} setFeature={setFeature} />
    </>
  );
};

export default AnalyticsBar;
