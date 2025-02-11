import { IIConProps } from '@/app/commonComponents/commonInterface';

const InstagramIcon = ({ height, width }: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 16 16">
      <path fill="#2F2F2F" d="M9.663 6.33a2.358 2.358 0 1 1-3.335 3.335 2.358 2.358 0 0 1 3.335-3.336"></path>
      <path
        fill="#2F2F2F"
        d="M11.5 0h-7A4.505 4.505 0 0 0 0 4.5v7C0 13.982 2.019 16 4.5 16h7c2.482 0 4.5-2.018 4.5-4.5v-7C16 2.019 13.982 0 11.5 0M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m4.5-8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
      ></path>
    </svg>
  );
};

export default InstagramIcon;
