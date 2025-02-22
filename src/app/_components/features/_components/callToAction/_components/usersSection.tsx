import MinimalLogo from '@/app/public/logo/minimalLog';
import Image from 'next/image';

const UsersSection = () => {
  return (
    <div className="flex justify-center items-center gap-2 bg-gradient-to-t from-primary-100 to-primary rounded-lg p-4 relative">
      <div className="rounded-lg overflow-hidden w-18 h-18">
        <Image src="/feature/user.png" height={125} width={290} alt="user image" className="w-full h-full object-center object-cover" />
      </div>
    </div>
  );
};

export default UsersSection;
