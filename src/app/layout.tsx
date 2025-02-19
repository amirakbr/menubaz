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
      <body className={`antialiased container mx-auto ${iranYekan?.className} ${iranYekan?.variable}`}>
        <Header />
        <main className="px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
