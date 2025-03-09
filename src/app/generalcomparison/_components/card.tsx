import Button from '@/app/commonComponents/button';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[904px] w-full flex justify-between gap-20 py-6 px-8 rounded-xl bg-gradient-to-t from-white-200 to-transparent">
        <div className="flex flex-col gap-7 max-w-96">
          <p className="text-xl text-title font-semibold">
            منوباز پلتفرم آنلاینی است که به کافه یا رستوران شما کمک می کند در عصر دیجیتال رونق پیدا کند.
          </p>
          <Button variant="secondary" className="w-max">
            همین حالا ثبت نام کنید
          </Button>
        </div>
        <div>
          <Image alt="growth chart picture" src={'/generalComparison/growth.webp'} width={271} height={191} />
        </div>
      </div>
    </div>
  );
};

export default Card;
