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
    <>
      <div className="flex flex-col gap-12 xl:gap-[200px] px-4">
        <Header />
        <Analysis />
        <HistoryTimeLine />
        <OurValues />
        <div className="flex flex-col gap-10">
          <p className="text-title text-3xl font-bold text-center">راه های ارتباطی</p>
          <div className="grid gird-cols-1 grid-rows-3 md:grid-rows-[auto] md:grid-cols-2 xl:grid-cols-3 gap-3">
            <Address />
            <Mailbox />
            <CallCenter />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 xl:gap-[200px] px-4">
        <JoinOurTeam />
      </div>
      <OurTeam />
    </>
  );
};

export default AboutUs;
