import LargeLogo from '@/app/public/logo/largeLogo';
import FooterLinkContainer from './_components/footerLinkContainer';
import Link from 'next/link';
import { address, email, socialMediaLink, tellPhone } from '@/app/constant/commonInfo';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className=" flex items-center justify-between font-normal p-4">
          <div className="flex flex-col gap-1">
            <LargeLogo width={147} height={21} />
            <p className="text-sm font-medium">منوباز، پلتفرم مدیریت سفارش گیری و پرداخت</p>
          </div>
        </div>
        <FooterLinkContainer />
        <div className="flex flex-col gap-1 text-sm p-4">
          <p>
            <Link className="text-title font-medium" href={`tel:${tellPhone}`}>
              {tellPhone}
            </Link>
            <span className="text-title-400 mr-2">شنبه تا پنجشنبه 9 صبح تا 12 شب</span>
          </p>
          <Link className="text-complementary" href={`mailto:${email}`}>
            {email}
          </Link>
          <address className="text-title-400">{address}</address>
          <p className="text-title">همراه ما باشید!</p>
          <div className="flex items-center gap-2">
            {socialMediaLink?.map(({ icon: Icon, link }) => (
              <Link href={link}>
                <Icon height={24} width={24} />
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-gray px-4 py-2 text-xs flex flex-col gap-2">
          <p className="text-subtitle-400">
            کلیه حقوق این سایت متعلق به شرکت بازآفرینان فرا هوشمند کارا (منوباز) می باشد
            <span className="mr-2 text-black-200">ایران - سال 1403</span>
          </p>
          <p className="text-white-600">طراحی شده توسط منوباز️</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
