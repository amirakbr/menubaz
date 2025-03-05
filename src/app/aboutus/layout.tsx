import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4">{children}</div>;
};

export default Layout;
