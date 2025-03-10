import MinimalLogo from '@/app/public/logo/minimalLog';
import SearchField from './searchField';

const Header = () => {
	return (
		<div className='flex flex-col items-center gap-8 text-center '>
			<h1 className='text-title font-bold text-2xl'>مرکز راهنما</h1>
			<div className='flex flex-col items-center justify-center overflow-visible	'>
				<div className='w-[354px] h-[354px] relative flex items-center justify-center'>
					<div className='w-12 h-12 bg-primary rounded-xl flex items-center justify-center z-[10]'>
						<MinimalLogo
							height={17}
							width={28}
						/>
					</div>
					<div
						className='w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border border-primary rounded-full animate-radar'
						style={{ animationDelay: '0s' }}></div>
					<div
						className='w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border border-complementary rounded-full animate-radar'
						style={{ animationDelay: '1s' }}></div>

					<div
						className='w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border border-primary rounded-full animate-radar'
						style={{ animationDelay: '2s' }}></div>
					<div
						className='w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border border-complementary rounded-full animate-radar'
						style={{ animationDelay: '3s' }}></div>

					<div
						className='w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border border-primary rounded-full animate-radar'
						style={{ animationDelay: '4s' }}></div>
					<div
						className='w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border border-complementary rounded-full animate-radar'
						style={{ animationDelay: '5s' }}></div>
				</div>
				<SearchField />
			</div>
		</div>
	);
};

export default Header;
