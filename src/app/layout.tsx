import type { Metadata } from 'next';
import './styles/globals.css';
import localFont from 'next/font/local';
import Header from './_components/header/header';
import Footer from './_components/footer/footer';

export const metadata: Metadata = {
  title: 'منو باز',
  description: 'منو باز یک پلتفرم برای تمامی اقراد ، مشتریان ، رستوران دار ها ، کافه دار ها و ...',
};

const iranYekan = localFont({
  src: [
    {
      path: './public/fonts/BYekan.ttf',
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
      <body className={`antialiased ${iranYekan?.className} ${iranYekan?.variable}`}>
        <Header />
        <main className="flex flex-col gap-12 container mx-auto xl:gap-[200px] max-w-[1320px] m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
