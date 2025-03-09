import Image from 'next/image';

export const businessPartners = [
  {
    imageSrc: '/partners/partner1.png',
  },
  {
    imageSrc: '/partners/partner7.png',
  },
  {
    imageSrc: '/partners/partner3.png',
  },
  {
    imageSrc: '/partners/partner4.png',
  },
  {
    imageSrc: '/partners/partner5.png',
  },
  {
    imageSrc: '/partners/partner8.png',
  },
];

const OurPartners = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-xl font-medium flex gap-0.5">
        <span className="text-complementary">1000+</span>
        کسب و کار از
        <span className="text-complementary">50+</span>
        شهر به منوباز اعتماد کرده‌اند
      </p>
      <div className="flex gap-2 items-center">
        {businessPartners?.map(({ imageSrc }) => {
          return (
            <Image
              src={imageSrc}
              alt={`${imageSrc} partner business logo`}
              key={`${imageSrc} partner business logo`}
              height={40}
              width={40}
              className="rounded-full"
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurPartners;
