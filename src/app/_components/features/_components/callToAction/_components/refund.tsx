import Image from 'next/image';

const Refund = () => {
  return (
    <div className="hidden lg:block rounded-lg overflow-hidden max-h-[250px]">
      <Image src="/feature/refund.png" height={250} width={416} alt="refund image" className="h-full w-full object-center object-cover" />
    </div>
  );
};

export default Refund;
