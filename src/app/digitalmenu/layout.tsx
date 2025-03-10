import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 flex flex-col gap-12 xl:gap-[200px]">{children}</div>;
};

export default Layout;
