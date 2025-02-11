import { IIConProps } from '@/app/commonComponents/commonInterface';

const TwitterIcon = ({ height, width }: IIConProps) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 19 16">
        <path
          fill="#2F2F2F"
          d="M4.735 13.338c-.424.458-.91.85-1.455 1.112-.424.261-.909.392-1.333.523-.424.13-.91.196-1.394.13 5.94 2.616 15.212-.327 15.273-10.984 0 0 1.94-1.177 2.424-2.68l-1.394.588.97-1.896c-.788.784-1.879 1.242-2.97 1.307-.909-2.288-6.848-2.354-5.94 3.596C4.433 5.623.736 1.111.736 1.111s-.97 3.008 1.333 4.904c0 0-.242.654-1.818 0 0 0 .485 3.4 3.212 3.4 0 0 .243 1.57-1.757 1.112a4.07 4.07 0 0 0 3.393 1.83c0 .131-.06.327-.06.458-.121.196-.182.392-.303.523"
        ></path>
      </svg>
    </>
  );
};

export default TwitterIcon;
