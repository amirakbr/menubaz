import FeedbackSummaryCard from '@/app/_components/feedback/_components/feedbackSummaryBadgeCard';
import ClockIcon from '@/app/public/icons/clockIcon';
import GraphIcon from '@/app/public/icons/graphIcon';
import ShoppingCartIcon from '@/app/public/icons/shoppingCartIcon';
import Image from 'next/image';
import { businessPartners } from './ourPartners';
import FeedbacksSection from '@/app/_components/feedback/_components/feadbackSection';

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex gap-7">
        <div className="h-auto flex flex-col gap-7 items-center justify-center border border-white-600 rounded-xl p-16">
          <p className="text-xl font-medium flex gap-0.5">
            <span className="text-complementary">1000+</span>
            کسب و کار از
            <span className="text-complementary">50+</span>
            شهر به منوباز اعتماد کرده‌اند
          </p>
          <div className='flex flex-col gap-2 items-center'>
          <div className="flex gap-2 items-center">
            {businessPartners?.map(({ imageSrc }) => {
              return (
                <Image
                  src={imageSrc}
                  alt={`${imageSrc} partner business logo`}
                  key={`${imageSrc} partner business logo`}
                  height={48}
                  width={48}
                  className="rounded-full"
                />
              );
            })}
          </div>
          <div className="flex gap-2 items-center">
            {businessPartners?.map(({ imageSrc }) => {
              return (
                <Image
                  src={imageSrc}
                  alt={`${imageSrc} partner business logo`}
                  key={`${imageSrc} partner business logo`}
                  height={48}
                  width={48}
                  className="rounded-full"
                />
              );
            })}
          </div>
          </div>
        </div>
        <div className="relative w-[265px] h-[268px] rounded-xl overflow-hidden">
          <Image fill alt="handshake image" src={'/speceficComparsion/handshake.png'} />
        </div>
      </div>
      <div className="grid grid-cols-1 w-full xl:w-max xl:grid-cols-[auto_auto_auto] gap-3">
        <FeedbackSummaryCard icon={ShoppingCartIcon} subtitle={'حجم سفارشات'} summary={'۲۰%'} title={'افزایش'} />
        <FeedbackSummaryCard icon={GraphIcon} subtitle={'در هزینه‌های جاری'} summary={'۳۷%'} title={'صرفه جویی'} />
        <FeedbackSummaryCard icon={ClockIcon} subtitle={'زمان تحویل سفارش'} summary={'۱۵ دقیقه‌ای'} title={'کاهش'} />
      </div>
      <FeedbacksSection />
    </div>
  );
};

export default Testimonial;
