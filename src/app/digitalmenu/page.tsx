import Benefits from './_components/benefits/benefits';
import BenefitsOfUse from './_components/benefitsOfUse/benefitsOfUse';
import Businesses from './_components/businesses/businesses';
import CardDigitalBranch from './_components/cardDigitalBranch/cardDigitalBranch';
import Header from './_components/header';
import Services from './_components/services/services';
import UserInterface from './_components/userInterface/userInterface';

const DigitalMenu = () => {
  return (
    <>
      <Header />
      <Benefits />
      <UserInterface />
      <Services />
      <CardDigitalBranch />
      <BenefitsOfUse />
      <Businesses />
    </>
  );
};

export default DigitalMenu;
