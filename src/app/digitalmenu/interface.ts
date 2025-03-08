import { ReactNode } from 'react';

export interface ICardProps {
  icon: ReactNode;
  label: string;
}

export interface ITabProps {
  selectedTabIndex?: number;
}

export interface IBenefitsCardProps extends ITabProps {
  data: {
    title: string;
    subTitle: string;
    description: string;
  };
}
