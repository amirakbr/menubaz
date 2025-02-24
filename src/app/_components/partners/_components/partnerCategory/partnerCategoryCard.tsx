import TickIcon from '@/app/public/icons/tick';
import { IPartnerCategoryCardProps } from '../../interface';
import { partnerCategoryCardData } from './partnerCategoryData';
import Button from '@/app/commonComponents/button';
import Image from 'next/image';

const PartnerCategoryCard = ({ selectedTab }: IPartnerCategoryCardProps) => {
  const selectedPartnerCategory = partnerCategoryCardData[selectedTab];
  const { feature, partnerInfo, title } = selectedPartnerCategory || {};

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-8">
        <div className="flex flex-col gap-4">
          <div className="col-span-3 flex flex-col gap-3 pt-8 pb-16 bg-white-200 rounded-lg px-4">
            <h4 className="text-lg font-semibold text-title">{title}</h4>
            {feature?.map(({ description, title }, index) => (
              <div className="flex gap-2" key={`partner feature ${index}`}>
                <span className="relative top-1 bg-primary rounded-full p-0.5 h-4 w-4 flex items-center justify-center">
                  <TickIcon width={12} height={12} primaryColor="black" />
                </span>
                <p className="flex flex-col lg:flex-row gap-2">
                  <span className="font-semibold">{title}</span>
                  <span>{description}</span>
                </p>
              </div>
            ))}
            <Button variant="secondary" size="small" className="w-max">
              بیشتر بدانید
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto] gap-4">
            <div className="order-2 lg:order-1 flex flex-col gap-8 bg-white-200 rounded-lg p-4 justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div>
                    <Image width={50} height={50} src="/partners/partner1.png" alt="partner avatar" />
                  </div>
                  <div>
                    <p className="font-semibold">{partnerInfo?.partner?.name}</p>
                  </div>
                </div>
                <p>{partnerInfo?.partner?.comment}</p>
              </div>
              <p className="text-orange-600 bg-primary-100 w-max py-1 px-3 rounded-full font-bold">{partnerInfo?.partner?.shopName}</p>
            </div>
            <div className="xl:w-[232px] xl:h-[232px] order-1 lg:order-2 flex items-center justify-center py-4 lg:!p-10 bg-[#1C8C97] rounded-lg">
              <div className="w-32 h-32">
                <Image width={90} height={90} className="w-full h-full" alt="partner logo" src={partnerInfo?.logo} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-96 lg:h-auto rounded-lg bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(/${partnerInfo?.shopImage})` }}
        ></div>
      </div>
    </>
  );
};

export default PartnerCategoryCard;
