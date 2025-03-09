import { IIConProps } from '@/app/commonComponents/commonInterface';

const StartIcon = ({ width = 13, height = 12, primaryColor = '#FFDE21' }: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 13 12">
      <path
        fill={primaryColor}
        d="M10.053 7.465a.7.7 0 0 0-.201.612l.561 3.108a.68.68 0 0 1-.284.682.7.7 0 0 1-.739.05l-2.797-1.459a.7.7 0 0 0-.316-.082h-.17a.5.5 0 0 0-.171.056l-2.798 1.466c-.138.07-.295.094-.448.07a.7.7 0 0 1-.562-.803l.562-3.107a.7.7 0 0 0-.202-.618L.208 5.23a.68.68 0 0 1-.17-.715.71.71 0 0 1 .561-.473l3.139-.455a.7.7 0 0 0 .556-.385L5.677.366a.7.7 0 0 1 .126-.17L5.86.152A.4.4 0 0 1 5.96.069l.07-.025L6.137 0h.266a.7.7 0 0 1 .555.379l1.402 2.823c.1.206.297.35.524.385l3.139.455a.72.72 0 0 1 .574.473.69.69 0 0 1-.183.714z"
      ></path>
    </svg>
  );
};

export default StartIcon;
