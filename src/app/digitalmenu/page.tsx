import ContactUs from '../_components/contactUs/contactUs';
import FAQ from '../_components/FAQ/FAQ';
import FooterSuggestion from '../_components/footerSuggestion/footerSuggestion';
import Benefits from './_components/benefits/benefits';
import BenefitsOfUse from './_components/benefitsOfUse/benefitsOfUse';
import Businesses from './_components/businesses/businesses';
import CardDigitalBranch from './_components/cardDigitalBranch/cardDigitalBranch';
import Header from './_components/header';
import ManagementAndUpdate from './_components/managmentAndUpdate/managmentAndUpdate';
import Services from './_components/services/services';
import UserInterface from './_components/userInterface/userInterface';

const DigitalMenu = () => {
  return (
    <>
      <div className="px-4 flex flex-col gap-12 xl:gap-[200px]">
        <Header />
        <Benefits />
        <UserInterface />
        <Services />
        <CardDigitalBranch />
        <BenefitsOfUse />
      </div>

      <Businesses />
      <div className="px-4 flex flex-col gap-12 xl:gap-[200px]">
        <ManagementAndUpdate />
        <FAQ />
        <ContactUs />
        <FooterSuggestion />
      </div>
    </>
  );
};

export default DigitalMenu;
