import { IIConProps } from '@/app/commonComponents/commonInterface';

const MinimalLogo = ({ height = 41, width = 69 }: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 69 41">
      <path
        fill="#262626"
        stroke="#828282"
        strokeWidth="0.783"
        d="M68.268.57H57.301s-9.205-.056-11.49.022V10.76l12.917.033s-.051 1.145-.53 2.684c-3.06 9.853-13.764 17.079-24.047 17.094-10.452.018-18.533-7.198-21.68-17.194-.817-2.602-1.347-10.162-1.347-12.807h-9.77c-.008.538.102 6.063.124 6.655a34.5 34.5 0 0 0 3.5 13.894 34.4 34.4 0 0 0 8.832 11.264 34.3 34.3 0 0 0 12.635 6.684c4.633 1.315 7.8 1.638 12.566.948C55.64 37.697 68.5 22.76 68.268 5.99z"
      ></path>
    </svg>
  );
};

export default MinimalLogo;
