import Management from './_components/management';
import Update from './_components/update';

const ManagementAndUpdate = () => {
	return (
		<div className='flex flex-col gap-8'>
			<Update />
			<Management />
		</div>
	);
};

export default ManagementAndUpdate;
