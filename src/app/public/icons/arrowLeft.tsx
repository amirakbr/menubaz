import { IIConProps } from '@/app/commonComponents/commonInterface';

const ArrowLeftIcon = ({ height = 16, width = 16 ,primaryColor="#5B21FF"}: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 16 16">
      <path
        fill={primaryColor}
        d="M6.38 12.547a.5.5 0 0 1-.353-.147L1.98 8.353a.503.503 0 0 1 0-.706L6.027 3.6a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707L3.04 8l3.693 3.693a.503.503 0 0 1 0 .707.48.48 0 0 1-.353.147"
      ></path>
      <path fill={primaryColor} d="M13.667 8.5H2.447a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h11.22c.273 0 .5.227.5.5s-.227.5-.5.5"></path>
    </svg>
  );
};

export default ArrowLeftIcon;
