import AnalyticsSection from './_components/analytics/analytic';
import BlogSection from './_components/blog/blog';
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
      <HeroSection />
      <AnalyticsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PartnersSection />
      <FooterSuggestion />
      <FeedBacksSection />
      <BlogSection />
    </>
  );
}
