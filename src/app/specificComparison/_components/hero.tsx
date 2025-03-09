import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-[738px]">
      <Image fill alt="speceficComparsion image" src={'/speceficComparsion/speceficComparsion.png'} className="object-cover object-center" />
    </div>
  );
};

export default Hero;
