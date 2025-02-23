import { IIConProps } from '@/app/commonComponents/commonInterface';

const BikeIcon = ({ width, height }: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 82 80">
      <path
        stroke="#595959"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M47.14 24.494h17.35M54.563 24.651l4.966 33.924M37.994 59.617c0 5.477-4.349 9.94-9.745 9.94s-9.745-4.436-9.745-9.94M64.541 24.494l3.678 25.245M66.273 31.795h5.047M59.504 59.507H15.37M69.255 69.553c5.382 0 9.745-4.45 9.745-9.939 0-5.49-4.363-9.939-9.745-9.939s-9.745 4.45-9.745 9.94c0 5.488 4.363 9.938 9.745 9.938ZM42.893 59.512l-6.309-13.416M15.37 59.509s-.322-13.581 11.812-13.581"
      ></path>
      <path
        stroke="#595959"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M34.43 45.958H11.02v-10.24h23.41c2.764 0 5.02 2.3 5.02 5.12s-2.256 5.12-5.02 5.12Z"
      ></path>
      <path
        stroke="#FFDE21"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M21.175 35.716H9.605C5.952 35.716 3 32.704 3 28.98v-11.8c0-3.724 2.953-6.736 6.604-6.736h11.57c3.652 0 6.605 3.012 6.605 6.735V28.98c0 3.724-2.953 6.736-6.604 6.736Z"
      ></path>
    </svg>
  );
};

export default BikeIcon;
