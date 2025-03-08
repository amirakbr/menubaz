import HamburgerImage from './hamburgerImage';
import UserInterfaceImage from './userInterfaceIcon';

const UserInterface = () => {
  return (
    <div className='lg:w-max lg:mx-auto'>
      <div className="w-96 h-96 lg:w-[721px] lg:h-[630px]">
        <UserInterfaceImage width={'100%'} height={'100%'} />
      </div>
      <div className='flex items-center justify-center'>
      <div className="mx-4 p-4 rounded-xl bg-whiteBlack-100 rounded-xl drop-shadow-userInterfaceDesignCard relative bottom-11 lg:w-[407px] lg:right-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-title text-xs font-medium">کینگ برگر مخصوص</span>
              <div className="flex flex-col text-subtitle-300 text-6 md:text-8">
                <span>برگر هیزمی + پیاز حلقه‌ای</span>
                <span>سس مخصوص + مخلفات</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-xs">
                <span className="rounded-full text-whiteBlack-100 bg-complementary font-medium p-1">30%</span>
                <del className="font-medium text-subtitle-100">272,000</del>
              </div>
              <span className="text-title text-10 font-medium lg:text-base">190,000 تومان</span>
            </div>
          </div>
          <HamburgerImage />
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserInterface;
