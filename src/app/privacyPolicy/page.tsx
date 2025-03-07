import CollectedInfo from './_components/collectedinfo';
import CookieUsage from './_components/cookiesUsage';
import DisclosurePersonalInfo from './_components/disclosurePersonalInfo';
import FinancialInfoUsage from './_components/financialInfoUsage';
import InfoPeriod from './_components/infoKeepsPeriod';
import Introduction from './_components/introduction';
import OurPrivacyPolicyChanges from './_components/ourPrivacyPolicyChanges';
import ConnectionAndSecurityToThirdParties from './_components/securityAndConnectionToThirdParty';
import UserInfoUsage from './_components/userInfoUsage';
import UserPersonalInfoRights from './_components/userPersonalInfoRights';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-10 text-lg text-title-400">
      <Introduction />
      <CollectedInfo />
      <UserInfoUsage />
      <DisclosurePersonalInfo />
      <FinancialInfoUsage />
      <ConnectionAndSecurityToThirdParties />
      <CookieUsage />
      <InfoPeriod />
      <UserPersonalInfoRights />
      <OurPrivacyPolicyChanges />
    </div>
  );
};

export default PrivacyPolicy;
