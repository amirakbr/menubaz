import TestimonialCard from './testimonialsCard';
import testimonialsData from './testimonialsData';

const TestimonialCardContainer = () => {
  return (
    <div className="relative px-4 bg-gray lg:bg-transparent p-4 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_auto_auto] z-[5] relative gap-8">
        {testimonialsData?.map(({ content, icon, title }, index) => (
          <TestimonialCard content={content} icon={icon} title={title} key={`testimonial card ${index}`} />
        ))}
      </div>
      <div className="hidden lg:block absolute left-0 -bottom-5 w-full h-[50%] bg-gray rounded-lg"></div>
    </div>
  );
};

export default TestimonialCardContainer;
