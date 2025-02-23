import { IIConProps } from '@/app/commonComponents/commonInterface';

const TickIcon = ({ height = 9, width = 12, primaryColor = '#FFDE21' }: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 12 9">
      <path
        fill={primaryColor}
        d="M11.592.246a.833.833 0 0 0-1.184 0L4.2 6.463 1.592 3.846A.852.852 0 1 0 .408 5.073l3.2 3.2a.833.833 0 0 0 1.184 0l6.8-6.8a.834.834 0 0 0 0-1.226"
      ></path>
    </svg>
  );
};

export default TickIcon;
