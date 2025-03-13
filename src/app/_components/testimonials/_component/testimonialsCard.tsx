import Button from '@/app/commonComponents/button';
import { ITestimonialsData } from '../interface';

const TestimonialCard = ({ content, icon: Icon, title }: ITestimonialsData) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white-100 p-10 py-5 xl:py-10 text-center w-full lg:max-w-72 h-full justify-self-center border-[1px] border-[solid] border-[rgba(223,223,223,86.07%)]">
      <div>
        <Icon height={80} width={80} />
      </div>
      <p className="text-title text-base font-bold">{title}</p>
      <p className="text-subtitle-400 text-sm font-medium">{content}</p>
      <Button variant="contained" color="secondary" className="font-semibold">
        کسب اطلاعات بیشتر
      </Button>
    </div>
  );
};

export default TestimonialCard;
