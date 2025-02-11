export interface IFeatureBarProps {
  featureBarData: {
    label: string;
    name: string;
  }[];
  feature: string;
  setFeature?: (name: string) => void;
}
