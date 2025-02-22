import Image from 'next/image';

const FancyChair = () => {
  return (
    <div className="rounded-lg overflow-hidden flex-1">
      <Image
        src="/feature/modern-luxury-authentic-dining-room-interior.png"
        height={300}
        width={416}
        alt="modern luxury authentic dining room interior image"
        className="h-full w-full object-center object-cover"
      />
    </div>
  );
};

export default FancyChair;
