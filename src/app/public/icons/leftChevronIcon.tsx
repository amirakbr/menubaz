import { IIConProps } from "@/app/commonComponents/commonInterface";

const LeftChevronicon = ({ width = 9, height = 16 }: IIConProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 9 16"
    >
      <path
        fill="#F2F2F2"
        d="M7.498 15.225a.62.62 0 0 1-.441-.183L1.623 9.609a2.283 2.283 0 0 1 0-3.217L7.057.959a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883L2.507 7.275c-.4.4-.4 1.05 0 1.45L7.94 14.16a.63.63 0 0 1 0 .883.66.66 0 0 1-.442.183"
      ></path>
    </svg>
  );
};

export default LeftChevronicon;
