'use client'

import { useEffect, useState } from 'react';
import { IUseMediaQueryProps } from './interface';

const useMediaQuery = ({ minHeight, minWidth }: IUseMediaQueryProps) => {
  const [isHeightLarger, setIsHeightLarger] = useState(true);
  const [isWidthLarger, setIsWidthLarger] = useState(true);

  const handleScreenChange = (innerHeight: number, innerWidth: number) => {
    if (minHeight !== undefined) {
      setIsHeightLarger(innerHeight > minHeight);
    }
    if (minWidth !== undefined) {
      setIsWidthLarger(innerWidth > minWidth);
    }
  };

  // eslint-disable-next-line
  const sideMenuHandlerOnWindowResize = (e?: any) => {
    handleScreenChange(e?.target?.innerHeight, e?.target?.innerWidth);
  };

  useEffect(() => {
    handleScreenChange(window.innerHeight, window.innerWidth);
    window.addEventListener('resize', sideMenuHandlerOnWindowResize);
    return () => {
      window.removeEventListener('resize', sideMenuHandlerOnWindowResize);
    };
    // eslint-disable-next-line
  }, []);

  return { isHeightLarger, isWidthLarger, currentInnerHeight: window.innerHeight, currentInnerWidth: window.innerWidth };
};

export default useMediaQuery;
