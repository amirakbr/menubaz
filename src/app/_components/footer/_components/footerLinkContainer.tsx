import FooterLinks from './footerLinks';
import Licenses from './licenses';

const FooterLinkContainer = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-8 sm:gap-x-16 gap-y-4 justify-between p-4">
        <FooterLinks />
        <Licenses />
      </div>
      <hr className="bg-[#EEEEEE] mt-2" />
    </div>
  );
};

export default FooterLinkContainer;
