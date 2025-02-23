import FancyChair from './_components/fancyChair';
import Refund from './_components/refund';
import Chef from './_components/chef';
import CallToActionContact from './_components/callToActionContact';
import UsersSection from './_components/usersSection';
import FeatureDescription from './_components/featureDescription';

const CallToAction = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-5">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-4">
            <FancyChair />
            <Refund />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <FeatureDescription />
            <UsersSection />
          </div>
        </div>
        <CallToActionContact />
      </div>
      <Chef />
    </div>
  );
};

export default CallToAction;
