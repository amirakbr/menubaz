import { ReactNode } from 'react';

export interface IGroupButtonProps {
  selectedButton: string;
  setSelectedButton: (value: string) => void;
}

export interface IPackageComparisonHeaderProps {
  selectedPeriod: string;
  selectedPackage?: IPackagesData;
  isWidthLarger: boolean;
  setSelectedPackage: (packageData?: IPackagesData) => void;
}

export interface IPackageComparisonDetailProps {
  isDefaultOpen?: boolean;
  children: ReactNode;
  title: string;
}

export interface IPackagesData {
  name: string;
  isSpecial: boolean;
  title: string;
  subtitle: string;
  price: string;
  off: string;
  actualPrice: string;
  featureTitle: string;
  feature: {
    label: string;
    hadMoreInfo?: boolean;
  }[];
}

export interface IPackageComparisonDetailContainerProps {
  selectedPackage?: IPackagesData;
  isWidthLarger: boolean;
}
