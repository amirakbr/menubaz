import { IIConProps } from '@/app/commonComponents/commonInterface';
import React from 'react';

export interface ITestimonialsData {
  title: string;
  content: string;
  icon: ({ height, width }: IIConProps) => React.JSX.Element;
}
