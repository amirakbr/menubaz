import Button from '@/app/commonComponents/button';
import Image from 'next/image';

const CardDigitalBranch = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:pl-20 lg:gap-12 lg:px-4 bg-gradient-to-b from-whiteBlack-100 to-[#f7f7f7] rounded-xl">
      <div className="flex flex-col gap-6 lg:max-w-[624px]">
        <div className="flex flex-col gap-2">
          <p className="text-3xl text-title font-semibold pr-2">شعبه دیجیتال</p>
          <p className="text-xl text-subtitle">
            با استفاده از منو باز شما می توانید منوی دیجیتال خود را با اسم و لوگو رستوران یا کسب و کارتان ایجاد کنید! به عبارت دیگر منو باز یک وب اپ
            با آدرس اختصاصی شماست که هر شخصی از هر جایی امکان دسترسی بدون دردسر به آن را داشته و می تواند اطلاعات کاملی از برند و ویژگی های دلخواه شما
            را ببیند.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary">کسب اطلاعات بیشتر</Button>
          <p className="text-complementary font-medium rounded-lg border border-complementary p-1 px-2">برند خودتو بساز!</p>
        </div>
      </div>
      <div className="flex justify-center items-end">
        <div className="relative w-80 h-64">
          <Image fill alt="digitalBranch picture" src={'/digitalMenu/digitalBranch.webp'} />
        </div>
      </div>
    </div>
  );
};

export default CardDigitalBranch;
