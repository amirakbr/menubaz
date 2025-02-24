import HighlightText from '@/app/commonComponents/highliter';
import FeedbacksHeader from './feadbackHeader';
import FeedbacksSection from './feadbackSection';

const FeedbacksContainer = () => {
  return (
    <div className='flex flex-col gap-4'>
        <FeedbacksHeader />
        <FeedbacksSection />
    </div>
  );
};

export default FeedbacksContainer;
