import Link from 'next/link';
import { FooterLicenseData } from './footerLinkData';
import Image from 'next/image';

const Licenses = () => {
  return (
    <>
      <div className="flex gap-4 items-center self-end">
        {FooterLicenseData?.map(({ imageSrc, link, alt }, index) => (
          <Link key={`licenses ${index}`} href={link}>
            <Image alt={`license image from ${alt}`} src={imageSrc} width={60} height={40} className="object-center object-contain" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Licenses;
