import Address from '../contactus/_components/address';
import CallCenter from '../contactus/_components/callCenter';
import Mailbox from '../contactus/_components/mailbox';
import Analysis from './_components/analysis';
import Header from './_components/header';
import HistoryTimeLine from './_components/historyTimeLine';
import JoinOurTeam from './_components/joinOurTeam';
import OurTeam from './_components/ourTeam';
import OurValues from './_components/ourValues';

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Analysis />
      <HistoryTimeLine />
      <OurValues />
      <div className="grid gird-cols-1 grid-rows-3 md:grid-rows-[auto] md:grid-cols-2 xl:grid-cols-3 gap-3">
        <Address />
        <Mailbox />
        <CallCenter />
      </div>
      <JoinOurTeam />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
