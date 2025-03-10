import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return <div className='px-4 xl:px-0 flex flex-col gap-32 lg:gap-[200ps]'>{children}</div>;
};

export default Layout;
