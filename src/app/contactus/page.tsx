import ContactForm from './_components/contactForm';
import GraphIcon from './_components/graphIcon';
import Header from './_components/header';
import RequestDemo from './_components/requestDemo';
import SupporterImage from './_components/supporterImage';

const Contactus = () => {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <div>
        <div>
          <ContactForm />
          <SupporterImage />
          <RequestDemo />
          <GraphIcon />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
