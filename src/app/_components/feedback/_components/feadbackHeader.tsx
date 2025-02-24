import ShoppingCartIcon from '@/app/public/icons/shoppingCartIcon';
import FeedbackSummaryCard from './feedbackSummaryBadgeCard';
import GraphIcon from '@/app/public/icons/graphIcon';
import ClockIcon from '@/app/public/icons/clockIcon';

const FeedbacksHeader = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-4 text-center">
        <h4 className="text-3xl font-bold max-w-72">آنچه صاحبان کسب و کار در مورد منوباز می‌گویند</h4>
        <p className="text-base text-subtitle-400 tracking-wider">
          دلیل اینکه چرا <span className="text-complementary">۱۰۰۰+</span> کسب و کار از <span className="text-complementary">۵۰+</span> شهر به منوباز
          اعتماد کرده‌اند
        </p>
      </div>
      <div className="grid grid-cols-1 w-full xl:w-max xl:grid-cols-[auto_auto_auto] gap-3">
        <FeedbackSummaryCard icon={ShoppingCartIcon} subtitle={'حجم سفارشات'} summary={'۲۰%'} title={'افزایش'} />
        <FeedbackSummaryCard icon={GraphIcon} subtitle={'در هزینه‌های جاری'} summary={'۳۷%'} title={'صرفه جویی'} />
        <FeedbackSummaryCard icon={ClockIcon} subtitle={'زمان تحویل سفارش'} summary={'۱۵ دقیقه‌ای'} title={'کاهش'} />
      </div>
    </div>
  );
};

export default FeedbacksHeader;
