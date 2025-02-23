import AnalyticsSection from './_components/analytics/analytic';
import FeaturesSection from './_components/features/features';
import HeroSection from './_components/hero/hero';
import HowItWorksSection from './_components/howItWorks/howItWorks';
import TestimonialSection from './_components/testimonials/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnalyticsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
    </>
  );
}
