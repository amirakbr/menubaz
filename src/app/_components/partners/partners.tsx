import PartnerCategory from './_components/partnerCategory/partnerCategory';
import PartnerContainer from './_components/partnerContainer';

const Partners = () => {
  return (
    <div className="flex flex-col gap-12 xl:gap-[200px]">
      <PartnerContainer />
      <PartnerCategory />
    </div>
  );
};

export default Partners;
