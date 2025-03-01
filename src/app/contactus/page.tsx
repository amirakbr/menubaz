import Address from './_components/address';
import CallCenter from './_components/callCenter';
import ContactForm from './_components/contactForm';
import GraphIcon from './_components/graphIcon';
import Header from './_components/header';
import Mailbox from './_components/mailbox';
import RequestDemo from './_components/requestDemo';
import SupporterImage from './_components/supporterImage';

const ContactUs = () => {
	return (
		<div className='flex flex-col gap-16'>
			<Header />
			<div className='flex flex-col gap-3'>
				<div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[1fr_auto_auto]'>
					<ContactForm />
					<div className='xl:min-w-[372px]'>
						<SupporterImage />
					</div>
					<div className='grid grid-cols-[auto] md:grid-cols-2 md:col-span-2 xl:col-span-1 xl:grid-cols-1 gap-3 xl:max-w-[411px]'>
						<RequestDemo />
						<GraphIcon />
					</div>
				</div>
				<div className='grid gird-cols-1 grid-rows-3 md:grid-rows-[auto] md:grid-cols-2 xl:grid-cols-3 gap-3'>
					<Address />
					<Mailbox />
					<CallCenter />
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
