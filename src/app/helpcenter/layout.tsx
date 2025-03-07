import { ReactNode } from 'react';
import Header from './_components/header';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='px-4 flex flex-col'>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
