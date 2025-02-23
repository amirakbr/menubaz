import Button from '@/app/commonComponents/button';
import { ITestimonialsData } from '../interface';

const TestimonialCard = ({ content, icon: Icon, title }: ITestimonialsData) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white-100 py-16 px-8 text-center w-full lg:max-w-72 h-full justify-self-center">
      <div>
        <Icon height={80} width={80} />
      </div>
      <p className="text-title text-lg font-semibold">{title}</p>
      <p className="text-subtitle-400">{content}</p>
      <Button variant="primary">کسب اطلاعات بیشتر</Button>
    </div>
  );
};

export default TestimonialCard;
