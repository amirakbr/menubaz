import { IIConProps } from '@/app/commonComponents/commonInterface';

const MonitOirMobileIcon = ({ height = 40, width = 40, primaryColor = '#FFDE21', secondaryColor = '#595959' }: IIConProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 40 40">
      <path
        fill={secondaryColor}
        d="M16.667 29.5H10.35c-6.333 0-8.266-1.934-8.266-8.267v-10c0-6.333 1.933-8.267 8.266-8.267H27.9c6.334 0 8.267 1.934 8.267 8.267a1.26 1.26 0 0 1-1.25 1.25 1.26 1.26 0 0 1-1.25-1.25c0-4.9-.867-5.767-5.767-5.767H10.35c-4.9 0-5.766.867-5.766 5.767v10c0 4.9.866 5.767 5.766 5.767h6.317c.683 0 1.25.566 1.25 1.25 0 .683-.567 1.25-1.25 1.25"
      ></path>
      <path
        fill={secondaryColor}
        d="M16.667 37.033a1.26 1.26 0 0 1-1.25-1.25v-7.55c0-.683.566-1.25 1.25-1.25.683 0 1.25.567 1.25 1.25v7.55c0 .7-.567 1.25-1.25 1.25M16.667 22.834H3.334a1.26 1.26 0 0 1-1.25-1.25c0-.684.566-1.25 1.25-1.25h13.333c.683 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25"
      ></path>
      <path
        fill={secondaryColor}
        d="M16.667 37.034h-5.433a1.26 1.26 0 0 1-1.25-1.25c0-.684.567-1.25 1.25-1.25h5.433c.684 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25"
      ></path>
      <path
        fill={primaryColor}
        d="M31.732 37.033h-5.916c-4.617 0-6.184-1.566-6.184-6.183v-9.517c0-4.616 1.567-6.183 6.184-6.183h5.916c4.617 0 6.184 1.567 6.184 6.183v9.517c0 4.633-1.567 6.183-6.184 6.183M25.816 17.65c-3.267 0-3.684.417-3.684 3.683v9.517c0 3.267.417 3.683 3.684 3.683h5.916c3.267 0 3.684-.416 3.684-3.683v-9.517c0-3.266-.417-3.683-3.684-3.683z"
      ></path>
      <path
        fill={secondaryColor}
        d="M28.835 31.617c-.434 0-.867-.167-1.184-.484a1.65 1.65 0 0 1-.35-.533 1.8 1.8 0 0 1-.133-.65c0-.433.183-.867.483-1.167a1.74 1.74 0 0 1 1.517-.466l.3.1c.1.05.2.1.283.15.1.066.184.133.267.216.3.3.483.733.483 1.167 0 .216-.05.433-.133.65-.083.2-.2.383-.35.533-.083.084-.167.15-.267.2a1.6 1.6 0 0 1-.283.167c-.1.033-.2.067-.3.083-.117.034-.217.034-.333.034"
      ></path>
    </svg>
  );
};

export default MonitOirMobileIcon;
