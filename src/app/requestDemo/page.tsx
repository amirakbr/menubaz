import FeedbacksSection from '../_components/feedback/_components/feadbackSection';
import FooterSuggestion from '../_components/footerSuggestion/footerSuggestion';
import DataAnalysis from './_components/dataAnalysis';
import Header from './_components/header';
import ManHoldingLaptop from './_components/manHoldingLaptop';
import Partners from './_components/partners';
import RequestDemoForm from './_components/requestDemoForm';
import Testimonial from './_components/testimonial';
import WomanTakingPhone from './_components/womanTakingPhone';

const RequestDemo = () => {
	return (
		<>
			<div className='flex flex-col gap-7'>
				<Header />
				<div className='flex flex-col gap-3  lg:flex-row'>
					<div className='flex flex-col gap-3'>
						<DataAnalysis />
						<div className='hidden lg:block'>
							<WomanTakingPhone />
						</div>
					</div>
					<RequestDemoForm />
					<div className='flex flex-col gap-3'>
						<div className='h-full'> 
            <ManHoldingLaptop />
            </div>
						<Partners />
					</div>
				</div>
				<Testimonial />
				<FeedbacksSection />
				<FooterSuggestion />
			</div>
		</>
	);
};

export default RequestDemo;
