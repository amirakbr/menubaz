import Image from 'next/image';

const AnalyticsImage = () => {
  return (
    <>
      <div className="relative">
        <div className="px-8 z-10 relative flex items-center justify-center">
          <div className="p-1 rounded-xl bg-gray-100">
            <Image alt="menubaz panel logo" src={'/analytics/menubazPanel.png'} width={797} height={440} className="rounded-xl" />
          </div>
        </div>
        <div className="h-[90%] w-full absolute bg-gray-500 top-[5%] left-0 translate-y-[0] rounded-xl"></div>
      </div>
    </>
  );
};

export default AnalyticsImage;
