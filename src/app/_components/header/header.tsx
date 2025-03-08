import MinimalLogo from '@/app/public/logo/minimalLog';
import tabConfig from './tabConfig';
import Menu from './menu';
import { Fragment } from 'react';
import Button from '@/app/commonComponents/button';
import MobileMenu from './mobileMenu';

const Header = () => {
  return (
    <header className="p-4 container mx-auto sticky top-0 bg-whiteBlack-100 z-[+100000]">
      <div className="flex items-center justify-between gap-4 hidden lg:flex">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="px-2 py-3 rounded-lg bg-primary">
              <MinimalLogo width={20} height={12} />
            </div>
            <p className="text-xl font-semibold">منوباز</p>
          </div>
          <div className="flex items-center gap-4">
            {tabConfig?.map(({ label, subMenu }, index) => {
              return (
                <Fragment key={`tab ${index}`}>
                  {subMenu && subMenu?.length > 0 ? (
                    <Menu label={label} subMenu={subMenu} />
                  ) : (
                    <p className="py-2 px-3 text-sm	font-medium">{label}</p>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-title text-sm font-medium">درخواست دمو</p>
          <Button variant="outline" size="small">
            ورود
          </Button>
          <Button variant="secondary" size="small">
            ثبت نام
          </Button>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;
