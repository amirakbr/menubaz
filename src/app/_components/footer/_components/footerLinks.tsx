import Link from 'next/link';
import { FooterLinkData } from './footerLinkData';

const FooterLinks = () => {
  return (
    <>
      {FooterLinkData?.map(({ subLinks, title }, index) => {
        return (
          <div className="flex flex-col gap-2" key={`links ${index}`}>
            <p className="text-title text-sm sm:text-xl relative after:content-[' '] after:block after:relative after:w-6 after:top-0 after:border-t-[2px] after:border-solid after:border-t-primary font-medium">
              {title}
            </p>
            {subLinks?.map(({ link, title }) => (
              <Link key={`link ${title}`} href={link} className="text-xs sm:text-sm text-subtitle-400 font-normal w-max flex flex-col relative after:content-[' '] after:w-full after:border after:border-primary after:absolute after:-right-full after:bottom-0 overflow-hidden hover:after:right-0 after:transition-all">
                {title}
              </Link>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default FooterLinks;
