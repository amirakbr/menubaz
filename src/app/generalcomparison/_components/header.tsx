import Button from "@/app/commonComponents/button";

const Header = () => {
	return (
		<div className='flex flex-col gap-8 items-center text-center '>
			<span className='py-1 px-4 border border-white-600 rounded-xl text-sm font-medium'>مقایسه</span>
			<h1 className='text-title text-3xl font-bold'>ببینید چرا هزاران کسب‌وکار منوباز را انتخاب کرده‌اند</h1>
			<h2 className='text-xl font-medium text-subtitle-400'>نه یک، نه دو، بلکه بیش از چهار ابزار مختلف را با پلتفرم جامع منوباز جایگزین کنید.</h2>
               <Button variant="secondary" className="w-max">
                    همین حالا شروع کنید!
               </Button>
		</div>
	);
};
export default Header;
