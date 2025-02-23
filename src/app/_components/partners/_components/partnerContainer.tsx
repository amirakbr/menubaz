import PartnerImage from './partnerImage';
import partnersData from './partnersData';

const PartnerContainer = () => {
  const partnersSlice1 = partnersData?.slice(0, 10);
  const partnersSlice2 = partnersData?.slice(10, 20);
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl font-semibold text-center">ببینید چطور با مجموعه هایی مثل شما همکاری می‌کنیم</h3>
      <div className="hidden lg:flex flex-col gap-4 overflow-hidden">
        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
          {partnersSlice1?.map(({ link, logo }) => (
            <PartnerImage link={link} logo={logo} key={`partners logo ${logo}`} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
          {partnersSlice2?.map(({ link, logo }) => (
            <PartnerImage link={link} logo={logo} key={`partners logo ${logo}`} />
          ))}
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-4">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-2 min-w-full w-max animate-marquee">
            {partnersSlice1.map(({ link, logo }) => (
              <PartnerImage link={link} logo={logo} key={`partners logo ${logo}`} />
            ))}
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-2 min-w-full w-max animate-marqueeReverse">
            {partnersSlice2.map(({ link, logo }) => (
              <PartnerImage link={link} logo={logo} key={`partners logo ${logo}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerContainer;
