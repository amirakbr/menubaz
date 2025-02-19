import { ReactNode } from 'react';

export interface IFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface IFeatureData {
  title: string;
  summary: string;
  description: string;
}