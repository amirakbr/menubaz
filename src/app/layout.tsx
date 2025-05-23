import type { Metadata } from 'next';
import './styles/globals.css';
import localFont from 'next/font/local';
import Header from './_components/header/header';
import Footer from './_components/footer/footer';
import SocialLinkQuickMessage from './_components/message/message';
import createEmotionCache from './lib/createEmotionCache';
import ThemeProviderWrapper from './lib/theme-provider';

export const metadata: Metadata = {
  title: 'منوباز',
  description: 'منوباز یک پلتفرم برای تمامی اقراد ، مشتریان ، رستوران دار ها ، کافه دار ها و ...',
};

const iranYekan = localFont({
  src: [
    {
      path: './public/fonts/IRANYekanXFaNum-UltraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './public/fonts/IRANYekanXFaNum-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--iran-yekan',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`antialiased ${iranYekan?.className} ${iranYekan?.variable} lg:!overflow-auto`}>
        <ThemeProviderWrapper>
          <Header />
          <SocialLinkQuickMessage />
          <main className="mt-10 flex flex-col gap-12 container mx-auto xl:gap-[200px] max-w-[1323px] m-auto">{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
