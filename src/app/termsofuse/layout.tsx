import { ReactNode } from 'react';
import Address from '../contactus/_components/address';
import Mailbox from '../contactus/_components/mailbox';
import CallCenter from '../contactus/_components/callCenter';
import Header from './_components/header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-12 xl:gap-[200px] px-4">
      <div className="flex flex-col gap-10 lg:gap-12 w-full">
        <Header />
        <div className="flex items-start justify-between gap-28">
          <div className="flex flex-col gap-3 hidden lg:block shrink-0">
            <p className="text-sm text-title">موارد قانونی</p>
            <p className="text-title font-bold text-sm">قوانین شرایط استفاده</p>
            <p className="text-sm text-title-300">حریم خصوصی</p>
          </div>
          {children}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <p className="text-title text-3xl font-bold text-center">راه های ارتباطی</p>
        <div className="grid gird-cols-1 grid-rows-3 md:grid-rows-[auto] md:grid-cols-2 xl:grid-cols-3 gap-3">
          <Address />
          <Mailbox />
          <CallCenter />
        </div>
      </div>
    </div>
  );
};

export default Layout;
