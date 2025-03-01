import { address } from '@/app/constant/commonInfo';
import LocationIcon from '@/app/public/icons/locationIcon';
import MinimalLogo from '@/app/public/logo/minimalLog';

const Address = () => {
	return (
		<>
			<div className='flex items-end bg-auto bg-[url(/contact-us/mapImage.png)] relative bg-[83%_26%]'>
				<div className='w-4 h-4 rounded-full left-[80%] top-[10%] absolute'>
					<LocationIcon />
				</div>
				<div className='flex flex-col gap-2 px-5 py-7 bg-gradient-to-t from-[#FFFFFF] to-transparent from-[40%]'>
					<p className='text-2xl font-bold'>آدرس</p>
					<div className='flex items-center justify-between gap-4'>
						<address className='text-title-400'>{address}</address>
						<div className='bg-primary rounded-lg p-2'>
							<MinimalLogo
								width={20}
								height={20}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Address;
