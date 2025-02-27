import ContactForm from "./_components/contactForm";
import Header from "./_components/header";

const Contactus = () => {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <div>
          <ContactForm />
      </div>
    </div>
  );
};

export default Contactus;
