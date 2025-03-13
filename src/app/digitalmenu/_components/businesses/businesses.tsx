import Image from 'next/image';

const BusinessCategory = [
  {
    imageSrc: '/partnerCategory/resturant.png',
    title: 'رستوران',
  },
  {
    imageSrc: '/partnerCategory/coffeeshop.png',
    title: 'کافه',
  },
  {
    imageSrc: '/partnerCategory/foodcourt.png',
    title: 'فودکورت',
  },
  {
    imageSrc: '/partnerCategory/catering.png',
    title: 'کترینگ',
  },
  {
    imageSrc: '/partnerCategory/icecream.png',
    title: 'آبمیوه بستنی',
  },
  {
    imageSrc: '/partnerCategory/fastfood.png',
    title: 'فست فود',
  },
];

const Businesses = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="text-title text-2xl font-bold">کسب و کار ها</p>
        <p className="text-xl text-subtitle-400">منوباز برای همه!</p>
        <p className="text-title font-medium">
          رستوران یا کافی شاپ، فست فود یا فود کورت، بوفه یا فود استریت، قنادی یا بستنی فروشی، کترینگ و یا حتی هتل! منوباز به درد همه خواهد خورد و با
          نیاز های تخصصی ای که برای هر یک از این کسب و کار ها دارد، می تواند موجب افزایش چشم گیری در کیفیت ارائه خدمات، کاهش هزینه ها و حتی خطاهای
          انسانی شود. پس اگر شما هم می خواهید از تمام رقیبانتان متمایز شوید و یا کسب و کار خود را گسترش دهید، همین حالا اقدام کنید!
        </p>
      </div>
      <div className="w-full relative">
        <div className="flex items-center gap-4 whitespace-nowrap overflow-auto pb-8 relative">
          {BusinessCategory?.map(({ imageSrc, title }, index) => (
            <div className={`min-w-[259px] relative rounded-lg flex flex-col gap-4 ${index === 0 ? 'mr-16' : ''}`} key={`business category ${index}`}>
              <div className="overflow-hidden rounded-xl w-[248px] h-[232px] relative">
                <Image alt={imageSrc} src={imageSrc} fill />
              </div>
              <span className="text-title font-medium py-1 px-2 rounded-lg bg-white-300 w-max">{title}</span>
            </div>
          ))}
        </div>
        <div className="absolute -left-1 top-0 h-full w-20 xl:w-52 bg-gradient-to-r from-[#ffffffcc] to-[#ffffff00]"></div>
      </div>
    </div>
  );
};

export default Businesses;
