import { redirect } from 'next/navigation';
import { ISubRouteProps } from '../interface';
import { categoryData } from '../_components/categoryList';
import LinkList from './_components/linkList';

const HelpCenterCategory = async ({ params }: ISubRouteProps) => {
	const { category } = await params;
	const data = categoryData?.find(({ name }) => name === category);

	if (!data) {
		redirect('/helpcenter');
	}
	return (
		<div className='flex flex-col gap-10 mt-8'>
			<h2 className='text-xl font-bold text-title text-center'>آموزش مورد نظر خود را از لیست زیر انتخاب و یا از طریق کادر بالا ، آن را جستجو کنید.</h2>
			<div className='flex flex-col gap-6 xl:flex-row'>
				<div className='flex flex-col gap-4 shrink-0'>
					<p className='flex items-center gap-2 border-b-2 border-b-primary w-max text-2xl font-semibold text-title-400 before:content-[" "] before:w-4 before:h-4 before:rounded-full before:bg-primary'>
						{data?.label}
					</p>
					<span className='text-gray-300 text-base font-medium'>{data?.articleCount} مقاله</span>
				</div>
				<div className='xl:mt-16 w-full'>
					<LinkList />
				</div>
			</div>
		</div>
	);
};

export default HelpCenterCategory;
