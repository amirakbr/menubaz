import PackagesCard from './packagesCard ';

const Header = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="text-2xl font-bold text-title xl:text-3xl">تعرفه ها، متناسب با کسب و کار شما در هر اندازه </h1>
        <h2 className="text-xl text-subtitle-400">متناسب با نیاز خود، بهترین اشتراک را انتخاب کنید</h2>
      </div>
      <PackagesCard />
    </div>
  );
};

export default Header;
