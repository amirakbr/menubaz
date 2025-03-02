import { IIConProps } from '@/app/commonComponents/commonInterface';

const ArrowDownIcon = ({ height = 6, width = 10 }: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 10 6">
      <path
        fill="#141414"
        stroke="#141414"
        strokeMiterlimit="10"
        strokeWidth="0.8"
        d="M8.92 1.079a.295.295 0 0 0-.402 0l-3.515 3.29-3.531-3.29a.295.295 0 0 0-.402 0c-.096.09-.096.27.016.375l3.708 3.47A.3.3 0 0 0 4.987 5c.064 0 .144-.03.192-.075l3.708-3.47c.145-.106.145-.286.032-.376Z"
      ></path>
    </svg>
  );
};

export default ArrowDownIcon;
