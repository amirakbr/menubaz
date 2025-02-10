import LargeLogo from "@/app/public/logo/largeLogo";

const Footer = () => {
	return (
		<>
			<div className='flex flex-col gap-10'>
				<div className=' flex items-center justify-between'>
                         <LargeLogo width={147} height={21} />
                    </div>
			</div>
		</>
	);
};

export default Footer;
