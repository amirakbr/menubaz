import FAQ from '../_components/FAQ/FAQ';
import FooterSuggestion from '../_components/footerSuggestion/footerSuggestion';
import Card from './_components/card';
import Compare from './_components/compare';
import Header from './_components/header';
import SuperiorityOfMenubaz from './_components/superiorityOfMenubaz';
import Trial from './_components/trial';

const GeneralComparison = () => {
  return (
    <>
      <Header />
      <SuperiorityOfMenubaz />
      <Compare />
	  <Card />
      <Trial />
      <FAQ />
      <FooterSuggestion />
    </>
  );
};

export default GeneralComparison;
