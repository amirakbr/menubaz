import { IIConProps } from "@/app/commonComponents/commonInterface";

const ClockIcon = ({height=40,width=40}:IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 40 41">
      <path
        fill="#595959"
        d="M20 38.417c-9.883 0-17.916-8.034-17.916-17.917S10.117 2.583 20 2.583 37.917 10.617 37.917 20.5 29.884 38.417 20 38.417m0-33.334C11.5 5.083 4.584 12 4.584 20.5S11.5 35.917 20 35.917 35.417 29 35.417 20.5 28.5 5.083 20 5.083"
      ></path>
      <path
        fill="#FFDE21"
        d="M26.184 27.05c-.217 0-.434-.05-.634-.183l-5.166-3.084c-1.284-.766-2.234-2.45-2.234-3.933v-6.833c0-.684.567-1.25 1.25-1.25.684 0 1.25.566 1.25 1.25v6.833c0 .6.5 1.483 1.017 1.783l5.167 3.084c.6.35.783 1.116.433 1.716-.25.4-.667.617-1.083.617"
      ></path>
    </svg>
  );
};

export default ClockIcon;
