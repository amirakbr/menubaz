'use client';

import Button from '@/app/commonComponents/button';
import CloseCircle from '@/app/public/icons/closeCircle';
import MenuIcon from '@/app/public/icons/menu';
import MinimalLogo from '@/app/public/logo/minimalLog';
import { Fragment, useState } from 'react';
import tabConfig from './tabConfig';
import ArrowDownIcon from '@/app/public/icons/arrowDownIcon';
import { socialMediaLink } from '@/app/constant/commonInfo';
import Link from 'next/link';
import LargeLogo from '@/app/public/logo/largeLogo';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };
  return (
    <>
      <div className="flex items-center justify-between lg:hidden">
        <div className="flex items-center gap-5">
          <div onClick={handleOpenMenu}>
            <MenuIcon />
          </div>
          <Button size="small" variant="contained" color="secondary" className="py-1">
            ثبت نام
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-1.5 py-2 rounded-lg bg-primary">
            <MinimalLogo width={13.7} height={7.8} />
          </div>
          <p className="text-base	font-semibold">منوباز</p>
        </div>
      </div>
      {isMenuOpen ? (
        <div
          className="fixed w-dvw h-dvh left-0 top-0 bg-white-900/70 backdrop-blur-sm z-[+20000] animate-moveLeft lg:hidden"
          onClick={handleCloseMenu}
        >
          <div
            className="max-w-[300px] bg-white h-full p-4"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col justify-between gap-4 h-full">
              <div className="flex flex-col gap-4">
                <div className="p-1 cursor-pointer" onClick={handleCloseMenu}>
                  <CloseCircle height={30} width={30} />
                </div>
                <div className="flex flex-col">
                  {tabConfig?.map(({ label, subMenu }, index) => {
                    return (
                      <Fragment key={`tab ${index}`}>
                        {subMenu && subMenu?.length > 0 ? (
                          <>
                            <Accordion
                              classes={{
                                expanded: '!rounded-xl',
                                root: '!m-0 !border-0 !shadow-none !outline-0 after:!hidden before:!hidden !bg-transparent',
                              }}
                              key={`mobile menu ${index}`}
                            >
                              <AccordionSummary
                                classes={{ content: '!m-0 !bg-transparent !min-h-auto' }}
                                expandIcon={
                                  <span
                                    className={`h-7 w-7 rounded-full transition-all flex items-center justify-center text-white-900 bg-transparent`}
                                  >
                                    <ArrowDownIcon primaryColor="currentColor" width={12} height={12} />
                                  </span>
                                }
                              >
                                <p className="text-sm	font-medium">{label}</p>
                              </AccordionSummary>
                              <AccordionDetails classes={{ root: '!m-0 !py-0' }}>
                                {subMenu?.map(({ label, icon: Icon }, index) => (
                                  <p className="px-3 py-2 text-sm	font-medium flex items-center gap-2 group cursor-pointer transition-all hover:bg-gray-100 hover:rounded-full" key={`sub menu ${index}`}>
                                    {Icon ? (
                                      <span className="text-title">
                                        <Icon height={20} width={20} primaryColor="currentColor" />
                                      </span>
                                    ) : null}

                                    <span className="text-subtitle-600 group-hover:text-title-900 transition-all">{label}</span>
                                  </p>
                                ))}
                              </AccordionDetails>
                            </Accordion>
                          </>
                        ) : (
                          <p className="py-2 px-3 text-sm	font-medium transition-all hover:bg-gray-100 hover:rounded-full">{label}</p>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
                <Button variant="contained" color="primary" className='rounded-full'>
                  درخواست دمو
                </Button>
                <Button variant="outlined" color="secondary" className='rounded-full'>
                  ورود
                </Button>
              </div>
              <div className="flex flex-col gap-4 items-center lg:hidden">
                <div className="flex items-center justify-center gap-4">
                  {socialMediaLink?.map(({ icon: Icon, link }, index) => {
                    return (
                      <Link href={link} key={`side bar social links ${index}`}>
                        <Icon height={20} width={20} />
                      </Link>
                    );
                  })}
                </div>
                <LargeLogo height={15} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
