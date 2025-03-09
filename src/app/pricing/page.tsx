import FAQ from "../_components/FAQ/FAQ";
import FooterSuggestion from "../_components/footerSuggestion/footerSuggestion";
import Testimonial from "../specificComparison/_components/testimonial";
import Header from "./_components/header";
import RequestDemo from "./_components/requestDemo";
import UserFeedbacks from "./_components/usersFeedbacks";

const Pricing = () => {
  return (
    <>
      <Header />
      <Testimonial />
      <RequestDemo />
      <UserFeedbacks />
      <FAQ />
      <FooterSuggestion />
    </>
  );
};

export default Pricing;
