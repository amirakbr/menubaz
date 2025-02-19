export interface IAnalyticsBarProps {
  analyticsBarData: {
    label: string;
    name: string;
  }[];
  feature: string;
  setFeature?: (name: string) => void;
}
