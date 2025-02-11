'use client';

import { useState } from 'react';
import FeatureBar from './featureBar';
import featureBarData from './featureBarData';

const Feature = () => {
  const [feature, setFeature] = useState(featureBarData[0]?.name);
  return (
    <>
      <FeatureBar featureBarData={featureBarData} feature={feature} setFeature={setFeature} />
    </>
  );
};

export default Feature;
