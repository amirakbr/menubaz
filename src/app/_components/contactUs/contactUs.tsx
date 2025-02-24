import CallCenter from './_components/callCenter';
import ContactForm from './_components/contactForm';
import PeopleChain from './_components/peopleChain';
import SocialMediaContact from './_components/socialMediaContact';
import SupporterImage from './_components/supporterImage';

const ContactUs = () => {
  return (
    <>
      <div className="flex-col xl:flex-row flex gap-4">
        <ContactForm />
        <div className="flex flex-col gap-4">
          <div className="flex-col xl:flex-row flex gap-4">
            <SocialMediaContact />
            <SupporterImage />
          </div>
          <div className="flex-col xl:flex-row flex gap-4">
            <PeopleChain />
            <CallCenter />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
