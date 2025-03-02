import DataAnalysis from './_components/dataAnalysis';
import Header from './_components/header';
import ManHoldingLaptop from './_components/manHoldingLaptop';
import Partners from './_components/partners';
import RequestDemoForm from './_components/requestDemoForm';

const RequestDemo = () => {
	return (
		<>
			<div className='flex flex-col gap-7'>
				<Header />
				<div className='flex flex-col gap-3'>
					<DataAnalysis />
					<RequestDemoForm />
					<ManHoldingLaptop />
          <Partners />
				</div>
			</div>
		</>
	);
};

export default RequestDemo;
