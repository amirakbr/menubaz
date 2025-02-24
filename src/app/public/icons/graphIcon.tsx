import { IIConProps } from "@/app/commonComponents/commonInterface";

const GraphIcon = ({height=40,width=40}:IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 40 41">
      <path
        stroke="#595959"
        strokeLinecap="round"
        strokeWidth="2.5"
        d="M37.092 17.936V20.5c0 8.058 0 12.087-2.503 14.59s-6.532 2.503-14.59 2.503-12.086 0-14.59-2.503-2.503-6.532-2.503-14.59 0-12.086 2.503-14.59S11.941 3.407 20 3.407h2.564"
      ></path>
      <path
        stroke="#FFDE21"
        strokeLinecap="round"
        strokeWidth="2.5"
        d="m11.453 23.918 3.072-3.685c1.217-1.461 1.825-2.191 2.626-2.191s1.409.73 2.626 2.19l.445.535c1.217 1.46 1.826 2.19 2.627 2.19s1.409-.73 2.626-2.19l3.071-3.686"
      ></path>
      <path
        stroke="#FFDE21"
        strokeWidth="2.5"
        d="M26.838 8.535c0 3.947 4.273 6.415 7.692 4.44a5.13 5.13 0 0 0 2.564-4.44c0-3.947-4.273-6.415-7.692-4.44a5.13 5.13 0 0 0-2.564 4.44Z"
      ></path>
    </svg>
  );
};

export default GraphIcon;
