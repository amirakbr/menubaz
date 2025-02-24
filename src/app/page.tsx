import AnalyticsSection from './_components/analytics/analytic';
import BlogSection from './_components/blog/blog';
import ContactUs from './_components/contactUs/contactUs';
import FeaturesSection from './_components/features/features';
import FeedBacksSection from './_components/feedback/feadbacks';
import FooterSuggestion from './_components/footerSuggestion/footerSuggestion';
import HeroSection from './_components/hero/hero';
import HowItWorksSection from './_components/howItWorks/howItWorks';
import PartnersSection from './_components/partners/partners';
import TestimonialSection from './_components/testimonials/testimonials';

export default function Home() {
  return (
    <>
      <div className="px-4 flex flex-col gap-12 xl:gap-[200px]">
        <HeroSection />
        <AnalyticsSection />
        <FeaturesSection />
        <HowItWorksSection />
      </div>
      <TestimonialSection />
      <div className="px-4 flex flex-col gap-12 xl:gap-[200px]">
        <FeedBacksSection />
        <BlogSection />
        <ContactUs />
        <FooterSuggestion />
      </div>
    </>
  );
}
